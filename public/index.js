// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// other stuff
import "./styles.css"
import {useState} from "react"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtwu-4q5VRUfLAIkUhZZt7we3uKsmtF7k",
  authDomain: "personal-finance-tracker-alex.firebaseapp.com",
  projectId: "personal-finance-tracker-alex",
  storageBucket: "personal-finance-tracker-alex.appspot.com",
  messagingSenderId: "313186684932",
  appId: "1:313186684932:web:545cae8970481ef4502551",
  measurementId: "G-BSVDJWGE3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential)=> {
  //Signed in
  const user = userCredential.user
  //...
}).catch((error)=> {
    const errorCode = error.code 
    const errorMessage = error.message 
})

//the actual app
export default function App() {
    const[data, setData] = useState({})

    const handleInput = (event) => {
        let newInput = {[event.target.name]: event.target.value }

        setData({...data, ...newInput})
    }

    const handleSubmit = () => {}

    return(
        <div className = "App">
            <input name = "email"
            placeholder = "Email"
            onChange = {(event) => handleInput(event)}
            />
        

        <input
        name = "password"
        placeholder = "Password"
        onChange = {(event)=> handleInput(event)}
        />
        </div>
    )

}