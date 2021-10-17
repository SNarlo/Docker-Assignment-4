import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyCrNjRz8NKF6wYwMYB7ACwFjgQzR94hpgs",
    authDomain: "bookingsystemapp-2deba.firebaseapp.com",
    projectId: "bookingsystemapp-2deba",
    storageBucket: "bookingsystemapp-2deba.appspot.com",
    messagingSenderId: "1092551553197",
    appId: "1:1092551553197:web:aaf751ecfe8bd6a209d624"
})

export const auth = firebaseConfig.auth()
export default firebase