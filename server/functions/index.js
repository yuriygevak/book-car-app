const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const projectId = 'book-car-mobile';

admin.initializeApp({
    credential: admin.credential.cert(`../${projectId}-firebase-adminsdk-ryfsc-0b27e0bb87.json`),
    databaseURL: `https://${projectId}-default-rtdb.europe-west1.firebasedatabase.app`
});

// const storage = admin.storage();
const bucketName = `${projectId}.appspot.com`;
// const bucket = storage.bucket(bucketName);
const bucketUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/`

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/bookings', async (req, res) => {
    const userId = req.query.userId;
    admin.database().ref('/bookings').once('value')
        .then(data => {
            const userBookings = Object.values(data.val()).filter(item => item.userId === userId);
            return res.send(JSON.stringify(userBookings));
        })
        .catch(err => {
            return res.send(err);
        });
});

app.get('/carList', (req, res) => {
    admin.firestore().collection('carList').get()
        .then(querySnapshot => {
            const carListData = querySnapshot.docs.map(doc => doc.data());
            if (!carListData || !carListData.length) {
                return res.send(JSON.stringify({
                    status: 500,
                    error: 'data is empty'
                }));
            }

            carListData.forEach(car => {
                car.imageUrl = setImageUrl(car.imageUrl);
                car.gallery = car.gallery.map(imagePath => {
                   return setImageUrl(imagePath);
               });
            });

            return res.send(JSON.stringify(carListData));
        })
        .catch(err => {
            return res.send(err);
        });
});

app.get('/carDetails', (req, res) => {
    const carId = req.query.id;
    admin.firestore().collection('carDetails').get()
        .then(querySnapshot => {
            const carsData = querySnapshot.docs.map(doc => doc.data());
            const selectedCar = carsData.find(car => car.id === carId);
            if (!selectedCar) {
                return res.send(JSON.stringify({
                    status: 500,
                    error: 'data is empty'
                }));
            }
            selectedCar.imageUrl = setImageUrl(selectedCar.imageUrl);
            return res.send(JSON.stringify(selectedCar));
        })
        .catch(err => {
            return res.send(err);
        });
});

app.delete('/removeBooking', async (req, res) => {
    const bookingId = req.query.id;
    const bookingsDb = admin.database().ref('/bookings');
    bookingsDb
        .orderByChild('id')
        .equalTo(bookingId)
        .once('value')
        .then(snapshot => {
            const dataRef = Object.keys(snapshot.val())[0];
            bookingsDb
                .child(dataRef)
                .remove()
                .then(() => {
                    return res.send(JSON.stringify({message: 'Booking was removed'}));
                })
                .catch(() => {
                    return res.send(JSON.stringify({message: 'Remove error'}));
                });
        });
});

app.post('/saveBooking', (req, res) => {
    const booking = req.body;
    booking.id = uuid();
    admin.database().ref('/bookings').push(booking)
        .then(() => {
            return res.send(JSON.stringify({message: 'Booking was saved'}));
        })
        .catch(err => {
            return res.send(err);
        });
});

exports.expressApp = functions.https.onRequest(app);

function setImageUrl(storagePath) {
    return `${bucketUrl}${encodeURIComponent(storagePath)}?alt=media`;
}

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
