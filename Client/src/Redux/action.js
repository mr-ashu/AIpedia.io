import { auth, googleAuthProvider } from '../Firebase/Firebase';
import {ActionTypes} from './actionType';
 

export const handleTheme=()=>{
   return {
      type: ActionTypes.SET_THEME
   }
}
export const googleSignupLoading = () => {
   return {

      type: ActionTypes.GOOGLE_SIGNUP_LOADING
   }
};

export const googleSignupSuccess = (user) => {
   return {

      type:ActionTypes.GOOGLE_SIGNUP_SUCCESS,
      payload: user,
   }
};

export const googleSignupError = (err) => {
   return {

      type:ActionTypes.GOOGLE_SIGNUP_ERROR,
      payload: err,
   }
};

export const googleSignup = () => {
   return function (dispatch) {
       dispatch(googleSignupLoading());
       auth
           .signInWithPopup(googleAuthProvider)
           .then(({ user }) => {
               console.log(user)
           })
           .catch((err) => dispatch(googleSignupError(err.message)));
   };
};

export const setUserLogin=(payload)=>{
     return {
        type:ActionTypes.SET_USER_LOGIN,
        payload:payload
     }
}

export const setMyspaceName=()=>{
   return{
      type:ActionTypes.SET_MYSPACE_NAME,
  
   }
}

export const homepageDataLoading = () =>{
   return {
      type : ActionTypes.HOME_PAGE_LOADING
   }
}

export const setHomepageCategory = (payload) =>{
   return {
      type : ActionTypes.HOME_PAGE_SUBCATEGORY,
      payload : payload
   }
}