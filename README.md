Book Car App

This is demo mobile app for study purposes only.
The app is developed using Ionic framework with Angular on UI part, and firebase functions with nodeJS on the server.
For the database firebase Firestore and realtime DB are used.
Images are located in firebase Storage.

To run the app locally you need run separately server and UI.
To start server locally you need to paste inside '/server' directory 
'book-car-mobile-e5ef69e343ec.json' and 'book-car-mobile-firebase-adminsdk-ryfsc-0b27e0bb87.json' files (need to request them).

Then both in '/server' and '/server/functions' directories run
- 'npm i'.
Finally, inside '/server' folder execute in terminal command 
- 'firebase emulators:start --only functions'.
To run UI part locally you need to run inside '/UI' directory commands:
- 'npm i'
- 'ionic serve'

