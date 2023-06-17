import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";

export const signInUser = async (email:string, password:string) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).then((credentials) => {
        const user = credentials.user
        console.log(user);
        
        const useIsLogin = () => useState('isLogin', () =>  true)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    return credentials;
  };