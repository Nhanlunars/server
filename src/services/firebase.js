const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pcss-e2b2e-default-rtdb.firebaseio.com", // <-- sửa lại đúng URL
});

const db = admin.database();
module.exports = db;
