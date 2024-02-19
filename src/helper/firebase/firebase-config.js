// eslint-disable-next-line import/no-extraneous-dependencies
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = firebaseApp;
