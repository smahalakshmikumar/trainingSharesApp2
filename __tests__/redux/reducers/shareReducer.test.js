import shareReducer from "../../../components/redux/reducers/shareReducer"
import {FETCH_SHARES_LIST,
    FETCH_SELECTED_SHARE,FETCH_FAILURE_SHARESLIST,SET_LOADER} from "../../../components/redux/actions/actionTypes";
 
describe("shareReducer",()=>{

    describe("when shareReducer and action{type:FETCH_SELECTED_SHARE}",()=>{
        describe("AND when state is []",()=>{
            it("should return updated state",()=>{
            let item1={id:1,time:"1PM-1.30PM"}
            let item2={id:2,time:"1PM-1.30PM"}
           let state = { sharesList:[],selectedShare:{},
           isLoading: false, error: ""  };
          let action={type:FETCH_SELECTED_SHARE,payload:{item1}}
          let result= shareReducer(state,action);
           expect(result).toStrictEqual({ sharesList:[],selectedShare:{item1},
            isLoading: false, error: ""});
        });
        
    })

   
        
})
 

describe("when shareReducer and action{type:FETCH_SHARES_LIST}",()=>{
    describe("AND when state is []",()=>{
        it("should return updated state",()=>{
            let item1={id:1,time:"1PM-1.30PM"}
            let item2={id:2,time:"1PM-1.30PM"}
           let state = {sharesList:[],selectedShare:{},
           isLoading: false, error: "" };
        let action={type:FETCH_SHARES_LIST,payload:[item1,item2]}
        let result= shareReducer(state,action);
        expect(result).toStrictEqual({sharesList:[item1,item2],
          isLoading: false,selectedShare:{},error:""});
    });
})

})

describe("when shareReducer and action{type:DEFAULT}",()=>{
    describe("AND when state is []",()=>{
        it("should return updated state",()=>{
      let item={id:1,time:"1PM-1.30PM"}    
      let state = {sharesList:[],selectedShare:{},
      isLoading: false, error: "" };
      let action={type:"DEFAULT_ACTION"}
      let result= shareReducer(state,action);
       expect(result).toStrictEqual(state);
    });
})

})

describe("when shareReducer and action{type:FETCH_FAILURE_SHARESLIST}",()=>{
    describe("AND when state is []",()=>{
        it("should return updated state",()=>{
        let error="error occurred"
        let state = { sharesList:[],selectedShare:{},
        isLoading: false, error: "" };
      let action={type:FETCH_FAILURE_SHARESLIST,payload:error}
      let result= shareReducer(state,action);
       expect(result).toStrictEqual({sharesList:[],selectedShare:{},
        isLoading: false,  error: error });
    });
})

})

})





   
