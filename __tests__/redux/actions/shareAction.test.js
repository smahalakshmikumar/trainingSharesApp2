import {fetchSharesList,fetchSelectedDoctor,fetchSuccess,fetchSelectedSuccess,fetchFailure} from "../../../components/redux/actions/shareAction";
import {
    FETCH_SHARES_LIST,
    FETCH_SELECTED_SHARE,
    FETCH_FAILURE_SHARESLIST
} from "../../../components/redux/actions/actionTypes"
import * as api from "../../../components/api/api"

describe("shares actions",()=>{

    
    describe("fetchSharesList  actions",()=>{
        describe("AND success fetchSharesList  actions",()=>{
            it("should return thunk fetchSharesList  action obj",async()=>{
                let response= {data:[{id:1},{id:2}]}
                let getDataSpy= jest.spyOn(api,'getData').mockImplementation(()=>
                Promise.resolve(response))
                
                let dispatch= jest.fn();
                let actionfn=fetchSharesList();
                await actionfn(dispatch);
    
                expect(getDataSpy).toHaveBeenCalled();
                expect(getDataSpy).toHaveBeenCalledTimes(1);
    
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(1);

                expect(dispatch.mock.calls[0]).toEqual([fetchSuccess(response.data)]);

    
    
            })

        })
 
        describe("AND failure fetchSharesList  actions",()=>{
            it("should return thunk fetchSharesList  action obj",async()=>{
                let error= {message:"error occured"}
                let getDataSpy= jest.spyOn(api,'getData').mockImplementation(()=>
                Promise.reject(error))
                
                let dispatch= jest.fn();
                let actionfn=fetchSharesList();
                await actionfn(dispatch);
    
                expect(getDataSpy).toHaveBeenCalled();
                expect(getDataSpy).toHaveBeenCalledTimes(1);
    
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(1);
                expect(dispatch.mock.calls[0]).toEqual([fetchFailure(error)]);
    
    
            })

        })
       
    })

   
    describe("fetchSelectedShare  actions",()=>{
        describe("AND success fetchSelectedShare  actions",()=>{
            it("should return thunk fetchSelectedShare  action obj",async()=>{
                let response= {data:[{id:1},{id:2}]}
                let getDataSpy= jest.spyOn(api,'getData').mockImplementation(()=>
                Promise.resolve(response))
                
                let dispatch= jest.fn();
                let actionfn=fetchSelectedDoctor();
                await actionfn(dispatch);
    
                expect(getDataSpy).toHaveBeenCalled();
                expect(getDataSpy).toHaveBeenCalledTimes(1);
    
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(1);

                expect(dispatch.mock.calls[0]).toEqual([fetchSelectedSuccess(response.data)]);

    
    
            })

        })
 
        describe("AND failure fetchSelectedDoctor  actions",()=>{
            it("should return thunk fetchSelectedDoctor  action obj",async()=>{
                let error= {message:"error occured"}
                let getDataSpy= jest.spyOn(api,'getData').mockImplementation(()=>
                Promise.reject(error))
                
                let dispatch= jest.fn();
                let actionfn=fetchSelectedDoctor();
                await actionfn(dispatch);
    
                expect(getDataSpy).toHaveBeenCalled();
                expect(getDataSpy).toHaveBeenCalledTimes(1);
    
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(1);
                expect(dispatch.mock.calls[0]).toEqual([fetchFailure(error)]);
    
    
            })

        })
       
    })


    describe("FETCH_SHARES_LIST",()=>{
        it("should return FETCH_SHARES_LIST action obj",()=>{
            let dataItem= [{id:1},{id:2}];
            let result = fetchSuccess(dataItem);
            expect(result).toStrictEqual({type: FETCH_SHARES_LIST,
                payload: dataItem})
        })
    })

    describe("FETCH_SELECTED_SHARE",()=>{
        it("should return FETCH_SELECTED_SHARE action obj",()=>{
            let data= [{id:1},{id:2}];
            let result = fetchSelectedSuccess(data);
            expect(result).toStrictEqual({type: FETCH_SELECTED_SHARE,
                payload: data})
        })
    })

    describe("POST_FAIL_ORDERS",()=>{
        it("should return POST_FAIL_ORDERS action obj",()=>{
            let error={message:"error occured"}
            let result = fetchFailure(error);
            expect(result).toStrictEqual({type: FETCH_FAILURE_SHARESLIST,
              payload:error.message})
        })
    })
})
