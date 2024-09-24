const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert('path/to/serviceAccountKey.json'),
  databaseURL: 'https://your-project-id.firebaseio.com'
});

const db = admin.firestore();

const user = {
  username: 'john.doe',
  email: 'john.doe@example.com',
  password: 'password123'
};

db.collection('users').add(user)
  .then(docRef => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch(error => {
    console.error('Error adding document: ', error);
  });
