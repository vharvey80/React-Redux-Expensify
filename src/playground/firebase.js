// const expensesRef = db.ref('Expenses');

// // child_removed
// expensesRef.on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// expensesRef.on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added
// expensesRef.on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// db.ref('Expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// })

// db.ref('Expenses').push({
//     description: 'Rent',
//     note: 'This is my rent for November 2018',
//     amount: 1002300,
//     createdAt: 12302139403
// });

/*** Creating Data. ***/
// const dbRef = db.ref();
// dbRef.set({
//     name: 'Vincent Harvey',
//     age: 23,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developper',
//         company: 'Google'
//     },
//     location: {
//         city: 'Gatineau',
//         country: 'Canada'
//     }
// })
//     .then((data) => {
//         console.log('Data is saved.');
//     })
//     .catch((error) => {
//         console.log('Error: ', error);
//     });

/*** Removing Data. ***/
// const isSingleRef = db.ref('isSingle');
// isSingleRef.remove()
//     .then(() => {
//         console.log('Remove succeded.');
//     })
//     .catch((e) => {
//         console.log('Remove failed: ' + e.message + '.');
//     });

// const isSingleRef = db.ref('isSingle').set(null); // equivalent of remove();

/*** Updating Data. ***/
// dbRef.update({
//     job: 'Manager',
//     'location/city': 'Montreal'
// })
//     .then(() => {
//         console.log('Updated the data.');
//     }).catch((e) => {
//         console.log('Error : ' + e);
//     });

// dbRef.update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle' 
// })
//     .then(() => {
//         console.log('Updated the data.');
//     }).catch((e) => {
//         console.log('Error : ' + e);
//     });

/*** Fetching Data. ***/
// const dbRef = db.ref();

// dbRef.once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Something went wrong while reading.');
//     });

/** Subscribtion **/

// const onValueChange = dbRef.on('value', (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`);
// }, (e) => {
//     console.log('Something went wrong while fetching the data.', e.message);
// });

// setTimeout(() => {
//     dbRef.update({
//         name: 'Urva Patel',
//         'job/company': 'Google'
//     });
// }, 4000);

// setTimeout(() => {
//     dbRef.off('value', onValueChange);
// }, 7000);