import orderReducer from "../../../components/redux/reducers/orderReducer"
import {    FETCH_SUCCESS_ORDERS
} from "../../../components/redux/actions/actionTypes";
 
describe("orderReducer",()=>{

    describe("when orderReducer and action{type:FETCH_SUCCESS_ORDERS}",()=>{
        describe("AND when state is []",()=>{
            it("should return updated state",()=>{
                let item1={id:1,time:"1PM-1.30PM"}
                let item2={id:2,time:"1PM-1.30PM"}
            let state = { 
               
    isLoading: false,
    confirmedShares:[]
            }
          let action={type:FETCH_SUCCESS_ORDERS,payload:[item1,item2]}
          let result= orderReducer(state,action);
           expect(result).toEqual({confirmedShares:[item1,item2],
             isLoading: false});
        });
    })
        
})
 
describe("when orderReducer and action{type:DEFAULT}",()=>{
    describe("AND when state is []",()=>{
        it("should return updated state",()=>{
      let item={id:1,time:"1PM-1.30PM"}    
      let state = { 
         
    isLoading: false,
    confirmedShares:[]
      }
      let action={type:"DEFAULT_ACTION"}
      let result= orderReducer(state,action);
       expect(result).toStrictEqual(state);
    });
})

})

})





   
