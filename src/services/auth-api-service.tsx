// import config from '../config'
import firebaseApp from '../firebaseConfig'

interface Credentials {
  email: string
  password: string
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
      await firebaseApp.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    } catch (e){
      // console.log('signIn Error:', e.message)
      throw Error(e.message)
    }
  },

  async logoutUser(){
    try{
      await firebaseApp.auth().signOut()
      console.log('logout success')
    } catch(e){
      console.log('Error', e.message)
      throw Error(e.message)
    }

  }

}

export default AuthApiService