import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
const config = {
  apiKey: "AIzaSyD2W8YlRCQI_nypvDsKh08V7J28QlbnAdc",
  authDomain: "basic-banking-app-6c24c.firebaseapp.com",
  databaseURL: "https://basic-banking-app-6c24c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "basic-banking-app-6c24c",
  storageBucket: "basic-banking-app-6c24c.appspot.com",
  messagingSenderId: "169278717284",
  appId: "1:169278717284:web:e875ba44503cc14eaa0e71",
  measurementId: "G-E3KPBDTYS1"
   
  };


  firebase.initializeApp(config);
  const database=firebase.database();
  
  // database.ref('Users').push({
  //   FirstName: 'Darshan',
  //   LastName: 'Raaval',
  //   email: 'ravald@gmail.com',
  //   PhoneNo: 8907589365,
  //   Balance: '10,46,679'
  // })

  export { firebase, database as default} ;
  



// //   child_removed
// //    database.ref('Expenses').on('child_removed', (snapshot)=>[
// //        console.log(snapshot.key, snapshot.val())
// //    ])


// // child_changed
// //    database.ref('Expenses').on('child_changed', (snapshot)=>[s
// //        console.log(snapshot.key, snapshot.val())
// //    ])
// // child_added
//    database.ref('Expenses').on('child_added', (snapshot)=>[
//        console.log(snapshot.key, snapshot.val())
//    ])


//   //   database.ref('Expenses').once('value').then((snapshot)=>{
// //       const expenses=[];
// //       snapshot.forEach((childSnapshot)=>{
// //          expenses.push({
// //              id: childSnapshot.key,
// //              ...childSnapshot.val()
// //          })
// //       })
// //       console.log(expenses)
// //   }).catch((e)=>{
// //       console.log("something went wrong",e)
// //   })


// // database.ref('Expenses').on('value', (snapshot)=>{
// //     const expenses=[];
// //     snapshot.forEach((childSnapshot)=>{
// //        expenses.push({
// //            id: childSnapshot.key,
// //            ...childSnapshot.val()
// //        })
// //     })
// //     console.log(expenses)
// // })

//   // database.ref('Expenses').push({
// //     description: 'Grocerries',
// //     amount:1600,
// //     note: 'Should buy today',
// //     createdAt: 2200
// // })


//   //   database.ref('notes').push({
// //       title: 'TCourse topics',
// //       body: 'angular, python, javascript'
// //   })


//   //   const firebaseNotes={
// //       notes:{
// //           fndskjfew8r847:{
// //             title: 'This is a note',
// //             body: 'This is my note'
// //           },
// //           fdjfhwj3482734932:{
// //             title: 'This is 2nd note',
// //             body: 'This is my note'
// //           }
// //       }
// //   }

// // const notes = [{
// //    id: 5453,
// //    title: 'This is a note',
// //    body: 'This is my note'
// // },{
// //     id: 3453532,
//     // title: 'This is 2nd note',
//     // body: 'This is my note'
// // }];
// // database.ref('notes').set(notes);  



//   // const onValueChange = database.ref().on('value', (snapshot)=>{
// //     console.log(snapshot.val())
// // })

// // setTimeout(()=>{
// //     database.ref('age').set(21);
// // }, 4000);



// // database.ref().update({
// //     height: 185,
// //     class: 'S'
// // })

//   // database.ref().once('value').then((snapshot)=>{
// //     const val = snapshot.val();
// //     console.log(val);
// // }).catch((e)=>{
// //       console.log("failed to fetch data", e);
// // })




// //   database.ref().set({
// //       name: 'Andrew NG',
// //       age: 34,
// //       isSingle: true,
// //       location:{
// //           city: 'Massachusetts',
// //           state: 'USA'
// //       }
// //   }).then(()=>{
// //       console.log("Data is saved")
// //   }).catch((e)=>{
// //       console.log("Something went wrong wtf!",e)
// //   })

// // database.ref('isSingle').remove().then(()=>{
// //     console.log("data is removed successfully")
// // }).catch((error)=>{
// //     console.log("Something went wrong!", error)
// // })

// // database.ref().update({
// //     name: 'Andrew MIKE',
// //     age: 57,
// //     job: 'deep learner',
// //     isSingle: null
// // })

// // database.ref().update({
// //     'location/city': 'New York'
// // })

