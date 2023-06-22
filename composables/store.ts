import { useStorage } from '@vueuse/core'
import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { UserLogin } from '~/model/UserLogin';

export const isLogin = useStorage('isLogin', false)
export const userLogin = useStorage('userLogin', {} as UserLogin)


export const storeDataUser = async (user: User) => {
    const docRef = doc(firestoreDb, "user_account", String(user.uid));
    const data = await getDoc(docRef);
  
    if (data.exists()) {
      isLogin.value = true
      userLogin.value = user
     
      return;
    }

    let newUser:UserLogin = {
      email: user.email,
      uid: user.uid,
      name: user.email,
    }
  
    setDoc(
      docRef,
      newUser
      ,
      { merge: true }
    );
    isLogin.value = true
    userLogin.value = newUser


  };