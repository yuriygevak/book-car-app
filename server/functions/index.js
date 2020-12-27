const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// const serviceAccount = require('../book-car-mobile-firebase-adminsdk-ryfsc-0b27e0bb87.json');

admin.initializeApp({
    credential: admin.credential.cert('../book-car-mobile-firebase-adminsdk-ryfsc-0b27e0bb87.json'),
    databaseURL: "https://book-car-mobile-default-rtdb.europe-west1.firebasedatabase.app"
});

const storage = admin.storage();

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
            return res.send(JSON.stringify(carListData));
        })
        .catch(err => {
            return res.send(JSON.stringify({
                status: 500,
                error: err
            }));
        })

});

exports.expressApp = functions.https.onRequest(app);
