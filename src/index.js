import { initializeApp} from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseApp = initializeApp({

})

const auth = getAuth(firebaseApp)


//Detect auth state

onAuthStateChanged(auth,user=> {
    if(user != null) {
        console.log('Logged in!')
    } else {
        console.log('No user!')
    }
})