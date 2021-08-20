import loginReducer from "../../../components/redux/reducers/loginReducer"
import { LOG_IN, LOG_OUT} from "../../../components/redux/actions/actionTypes";
 
describe("loginReducer reducer",()=>{

    describe("when loginReducer and action{type:LOG_IN}",()=>{
        describe("AND when state is []",()=>{
            it("should return updated state",()=>{
            let item={id:1,username:"maha"}
            let state = {
                usersList:[],
                isLoading: false,
              };
          let action={type:LOG_IN,payload:[item]}
          let result= loginReducer(state,action);
           expect(result).toStrictEqual({usersList:[item],isLoading:false});
        });
    })
        describe("AND when state is not []",()=>{
            it("should return updated state",()=>{
                let item1={id:1,username:"maha"}
                let item2={id:2,username:"kingsley"}

                let state = {
                    usersList: [item1],
                isLoading: false,
              };
          let action=({type:LOG_IN,payload:[item1,item2]})
          let result= loginReducer(state,action);
           expect(result).toStrictEqual({usersList:[item1,item2],isLoading:false});
        });
    });

    })
 
    describe("when loginReducer and action{type:LOG_OUT}",()=>{
      
        describe("when state is not []",()=>{
            it("should return updated state",()=>{
                let item1={id:1,username:"maha"}
                let item2={id:2,username:"kingsley"}

                let state = {
                    usersList: [item1,item2],
                isLoading: false,
              };
          let action={type:LOG_OUT,payload:2}
          let result= loginReducer(state,action);
           expect(result).toStrictEqual({usersList:[item1],isLoading:false});
        });
    });

    })
   
    


    describe("when loginReducer and action{type:DEFAULT}",()=>{
        describe("AND when state is []",()=>{
            it("should return updated state",()=>{
            let state = {
                usersList: [],
                isLoading: false,
              };
          let action={type:"DEFAULT_ACTION"}
          let result= loginReducer(state,action);
           expect(result).toStrictEqual(state);
        });
    })
  
    })

})





   
