import { ADD_TASK, DELETE_TASK, CHECK_TASK, 
         EDIT_TASK, TOGGLE, } from "../constants/actionTypes.js";




const initialState= {
    listItems:[],
    filtred: false,
};



export const reducerTask=(state=initialState, action) => {

    switch (action.type) {
        case ADD_TASK : 
                return {...state, listItems: [...state.listItems,action.payload] }
        case DELETE_TASK:
                return {
                  ...state,
                  listItems: state.listItems.filter((item) => item.id !== action.id),
                };
          
        case CHECK_TASK:
                return {
                  ...state,
                  listItems: state.listItems.map((el) =>
                    el.id === action.payload.id ? { ...el, isDone: !el.isDone } : el
                  ),
                };
        case EDIT_TASK:
                return {
                  ...state,
                  listItems: state.listItems.map((el) =>
                    el.id === action.id ? { ...el, text: action.text } : el
                  ),
                };
        case TOGGLE:
                return {
                  ...state,
                  filtred: !state.filtred,
                };    
    
        default: return (state)
          
    }
}