// import config from '../config'
import firebaseApp from '../firebaseConfig'

interface Credentials {
  email: string
  password: string
} 

interface fbError extends Error{
  code: string
}


const AuthApiService = {

  async createWithEmailPassword(credentials: Credentials){                                                                                  
    // console.log('createWithEmailPassword', credentials)
    try{
      await firebaseApp.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
    } catch (e){
      // console.log('Account Creation Error:', e.message)
      throw Error(e)
    }
  },

  async signInWithEmailPassword(credentials: Credentials){
    // console.log('loginWithEmailPassword', credentials)
    try{
      await firebaseApp.auth().setPersistence('session')
      await firebaseApp.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    } catch (e){
      throw e
    }
  },

  async logoutUser(){
    try{
      await firebaseApp.auth().signOut()
      // console.log('logout success')
    } catch(e){
      // console.log('Error', e.message)
      throw Error(e.message)
    }

  },

  authErrorSwitch(fbError: fbError): string{
    const code: String = fbError.code
    switch(code){
      case 'auth/invalid-email':
        return ('Email or Password is incorrect')
      case 'auth/wrong-password':
        return ('Email or Password is incorrect')
      case 'auth/user-disabled':
        return ('This account has been disabled')
      case 'auth/user-not-found':
        return ('Email or Password is incorrect')
      default:
        return fbError.message
    }
  }
  
}

export default AuthApiService