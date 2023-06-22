import { isLogin } from './store';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
      const user = credentials.user;
      storeDataUser(user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });
  return credentials;
};

export const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(getAuth(), email);
};

export const loginWithGoogle = async () => {
  const googleProv = new GoogleAuthProvider();
  signInWithPopup(getAuth(), googleProv)
    .then((a) => {
      storeDataUser(a.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });
};

export const onLogoutAction = () => {
  signOut(getAuth()).then(() => {
      isLogin.value = false
      console.log(isLogin);
      
  })
}