import * as actionTypes from '../actions/actionType';

initiaState ={
    count:10
}
const reducer= (state=initiaState, action) => {
     switch(action.type){
        case actionTypes.INCREMENT_COUNT:
            return{
                ...state,
                count : state.count+1
            };
        case actionTypes.DECREMENT_COUNT:
            return{
                ...state,
                count : state.count - 1
            };
       case actionTypes.ADD_FIVE:
          console.log(action.counter);  /* action.counter since addNumber() has key of counter*/
           return{
               ...state,
               count: state.count + action.counter
        };
        default :
         return state;
     }
}

export default reducer;