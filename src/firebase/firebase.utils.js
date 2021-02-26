import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTQxHou3qQfyJ-Ke8HargDhUAk2QJKLLw",
    authDomain: "spacex-db.firebaseapp.com",
    projectId: "spacex-db",
    storageBucket: "spacex-db.appspot.com",
    messagingSenderId: "197728801807",
    appId: "1:197728801807:web:87c4959e53f2c6e3993f7a"
  };

firebase.initializeApp(config);

export const createUserProfileDocument= async(userAuth, additionalData) => {
  if(!userAuth) return; //if userauth doesnt exist, retunt from is, same in laravel

  // if(userAuth.user)
  //we get the snapshot objsect from the referenceObject using get() methods
  //documentREf retunrs a documentSnapshot object 
  //collection returns a querySnapshot object 
  const userRef = firestore.doc(`users/${userAuth.uid}`) //will get back the userReference 


  const snapShot = await userRef.get();

  // console.log(snapShot);
//what we want to store and use to create
  if(!snapShot.exists) {
    //if the snapshot doesnt exist we create data  in that place  
    const {displayName, email} = userAuth; //this is waht we want
    const createdAt = new Date();
    //asyncronous request to database to store this data 
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log("error in database", error.message);
    }
    return userRef;
  
  }

}


/////
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;