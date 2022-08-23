import * as  types from "./actionTypes"
import {getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { googleAuthProvider, facebookAuthProvider }  from '../firebase.js';


const auth = getAuth();

const registerStart = () =>({
    type:types.REGISTER_START,
})

const registerSuccess = (user) =>({
    type:types.REGISTER_SUCCESS,
    payload:user,
})

const registerFail = (error) =>({
    type:types.REGISTER_FAIL,
    payload:error,
})


const loginStart = () =>({
    type:types.LOGIN_START,
})

const loginSuccess = (user) =>({
    type:types.LOGIN_SUCCESS,
    payload:user,
})

const loginFail = (error) =>({
    type:types.LOGIN_FAIL,
    payload:error,
})

const googleSignInStart = () =>({
    type:types.GOOGLE_SIGN_IN_START,
})

const googleSignInSuccess = (user) =>({
    type:types.GOOGLE_SIGN_IN_SUCCESS,
    payload:user,
})

const googleSignInFail = (error) =>({
    type:types.GOOGLE_SIGN_IN_FAIL,
    payload:error,
})

const fbSignInStart = () =>({
    type:types.FACEBOOK_SIGN_IN_START,
})

const fbSignInSuccess = (user) =>({
    type:types.FACEBOOK_SIGN_IN_SUCCESS,
    payload:user,
})

const fbSignInFail = (error) =>({
    type:types.FACEBOOK_SIGN_IN_FAIL,
    payload:error,
})


const logoutStart = () =>({
    type:types.LOGOUT_START,
})

const logoutSuccess = () =>({
    type:types.LOGOUT_SUCCESS,
})

const logoutFail = (error) =>({
    type:types.LOGOUT_FAIL,
    payload:error,
})

export const setUser = (user) =>({
    type:types.SET_USER,
    payload:user,
})


export const registerInitiate = (email,password,displayName)=>{
    return function (dispatch){
        dispatch(registerStart());
        createUserWithEmailAndPassword(auth, email,password).then(({user})=>{
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user))
        })
        .catch((error)=>dispatch(registerFail(error.message)));
    }
}

export const loginInitiate = (email,password)=>{
    return function (dispatch){
        dispatch(loginStart());
        signInWithEmailAndPassword(auth, email,password).then(({user})=>{
            dispatch(loginSuccess(user))
        })
        .catch((error)=>dispatch(loginFail(error.message)));
    }
}

export const logoutInitiate = ()=>{
    return function (dispatch){
        dispatch(logoutStart());
        
        signOut(auth)
        .then((resp)=>dispatch(logoutSuccess()))
        .catch((error)=>dispatch(logoutFail(error.message)));
    }
}


export const googleSignInInitiate =()=>{
    return function (dispatch){
        dispatch(googleSignInStart());
        signInWithPopup(auth, googleAuthProvider)
        .then(({user})=>{
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = googleAuthProvider.credentialFromResult(user);
            const token = credential.accessToken;
    
            dispatch(googleSignInSuccess(user))
        })
        .catch((error)=>dispatch(googleSignInFail(error.message)));
    }
}

export const fbSignInInitiate =()=>{
    return function (dispatch){
        dispatch(fbSignInStart());
        signInWithPopup(auth, facebookAuthProvider.addScope("user_birthday,email"))
        .then(({user})=>{
            dispatch(fbSignInSuccess(user))
        })
        .catch((error)=>dispatch(fbSignInFail(error.message)));
    }
}