import {legacy_createStore as createStore} from 'redux'
let initialState={
    search:{
        searchValue:"",
        type:""
    },
    date:{
        checkin:"",
        checkout:"",
    },
    roomInfo:{
        bed:"",
        price:"",
        view:"",
        img:"",
        idroon:"",
        idhotel:"",
        hotel_name:""
    }

}
let searchReducer=(state=initialState,action)=>{
    if(action.type=='choice_value'){
        return {
            ...state,
            
                search:{
                    searchValue:action.payload,
                    type:action.typeSearch,
                    id:action.id
                }
            
        }
    }
    if(action.type=="change_date"){
        
        return{
            ...state,
            date: {
                checkin:action.checkIn,
                checkout:action.checkOut
            }
        }
    }
    if (action.type=="Book_Room") {
        return{
            ...state,
            roomInfo:{
                bed:action.info.bed,
                price:action.info.price,
                view:action.info.view,
                img:action.info.img,
                idhotel:action.info.idhotel,
                idroom:action.info.idroom,
                hotel_name:action.info.hotel_name
            }
        }
    }   
    return state
}
let store=createStore(searchReducer);
export default store;