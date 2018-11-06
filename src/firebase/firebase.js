import * as firebase from 'firebase';

// https://expensifyapp-61e47.firebaseio.com/

const config = {
    apiKey: "AIzaSyBkrx5wIET7fBp96Z5l2UPzqNa-lFHyZe4",
    authDomain: "expensifyapp-61e47.firebaseapp.com",
    databaseURL: "https://expensifyapp-61e47.firebaseio.com",
    projectId: "expensifyapp-61e47",
    storageBucket: "expensifyapp-61e47.appspot.com",
    messagingSenderId: "190460354180"
};

firebase.initializeApp(config);

const db = firebase.database();

db.ref().set({
    name: 'Vincent Harvey',
    age: 23,
    isSingle: true,
    location: {
        city: 'Gatineau',
        province: 'Ontario',
        country: 'Canada'
    }
});

db.ref('age').set(28);

db.ref('location/city').set('Ottawa');

db.ref('attributes').set({
    height: 180,
    weight: 170
});