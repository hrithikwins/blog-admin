import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyAiQ1bssAt2YiLbWH9ej834kk1tXGRjR6U",
    authDomain: "atulyapoems.firebaseapp.com",
    databaseURL: "https://atulyapoems.firebaseio.com",
    projectId: "atulyapoems",
    storageBucket: "atulyapoems.appspot.com",
    messagingSenderId: "616846689778",
    appId: "1:616846689778:web:3848b3e9c8692f1e89576b",
    measurementId: "G-THCPZ58L1G"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;






















// 
// ___________________________________________________________________


// import { db } from './firebase.config';

// const collection = "blogs"

// export const getBlogsRequest = async () => {
//     return await db.collection(collection).get().then(res => {
//         let blogs = [];

//         res.docs.map(blog => {
//             let data = blog.data();

//             blogs.push({
//                 id: data.id,
//                 isChecked: data.isChecked,
//                 description: data.description,
//                 created: data.created
//             })
//             return blogs;
//         });
//     })
// }

// export const addBlogRequest = async (blog) => {
//     return await db.collection(collection)
//         .add(blog)
// }

// export const checkBlogRequest = (id, isChecked) => {
//     return db.collection(collection)
//         .doc(id)
//         .set({
//             isChecked: isChecked
//         })
// }

// export const removeBlogRequest = async (id) => {
//     return await db.collection(collection)
//         .db.collection(collection)
//         .doc(id)
//         .delete()
// }

// // Firestore

// // Add a new document in collection "cities"
// db.collection("blogs").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
//     .then(function () {
//         console.log("Document successfully written!");
//     })
//     .catch(function (error) {
//         console.error("Error writing document: ", error);
//     });