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
               car.imageUrl =`${bucketUrl}${encodeURIComponent(car.storagePath)}?alt=media`;
               delete car['storagePath'];
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
            selectedCar.imageUrl = `${bucketUrl}${encodeURIComponent(selectedCar.storagePath)}?alt=media`;
            delete selectedCar['storagePath'];
            return res.send(JSON.stringify(selectedCar));
        })
        .catch(err => {
            return res.send(err);
        });
});

exports.expressApp = functions.https.onRequest(app);
