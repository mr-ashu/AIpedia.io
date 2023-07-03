import {ActionTypes} from './actionType';


let data=JSON.parse(localStorage.getItem("UserData") ) || false;
const initState={
    loginData:data,
    space_name_loading:false,
    home_page_loading : false,
    search : "",
    loading:false,
    error:null,
    currentUser: null,
    theme:false,
    status : null,
    isAuth:data,
    

}

export const themeChange=(state=initState,{type})=>{
    switch(type){
        case ActionTypes.SET_THEME:
            return{
                ...state,
                theme: !state.theme
            }
            default:
                return state 
    }
}

export const userLogin=(state=initState,{type,payload})=>{
     switch(type){
        case ActionTypes.SET_USER_LOGIN:
            return{
                ...state,
                loginData:payload,
                isAuth:true
            }
        
            default:
                return state  
     }
}

export const spaceReducer=(state=initState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_MYSPACE_NAME:
            return{
                ...state,
                space_name_loading: !state.space_name_loading
            }
            case ActionTypes.HOME_PAGE_LOADING:
                return {
                    ...state,
                    home_page_loading : !state.home_page_loading
                }

         default:
            return state   
    }
}

export const filterReducer = (state = initState, {type, payload}) =>{
    switch(type){
        case ActionTypes.HOME_PAGE_SUBCATEGORY:
            return{
                ...state,
                search:payload
            }
        
            default:
                return state  
     }
}

export const googleLogin=(state = initState, {type, payload})=>{
    switch(type){
        case ActionTypes.GOOGLE_SIGNUP_LOADING:
            return {
                ...state,
                loading: true,
                status:true,
                isAuth:true
               
              };
        case ActionTypes.GOOGLE_SIGNUP_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
                status: "error",
              };
        case ActionTypes.GOOGLE_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                newUser:null,
                currentUser: payload,
                status: 'login success',
                error: null,
                isAuth:true
              };

              default:
                return state     
    }
}
