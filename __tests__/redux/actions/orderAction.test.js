import {postShareOrder,fetchOrders,fetchOrderSuccess} from "../../../components/redux/actions/orderAction";
import {
    ADD_TO_SHARE_ORDER,REMOVE_FROM_SHARE_ORDER,FETCH_SUCCESS_ORDERS
} from "../../../components/redux/actions/actionTypes"
import * as api from "../../../components/api/api"

describe("orders actions",()=>{

    
    describe("fetchOrders  actions",()=>{
        describe("AND success fetchOrders  actions",()=>{
            it("should return thunk fetchOrders  action obj",async()=>{
                let response= {data:[{id:1},{id:2}]}
                let getDataSpy= jest.spyOn(api,'getData').mockImplementation(()=>
                Promise.resolve(response))
                
                let dispatch= jest.fn();
                let actionfn=fetchOrders();
                await actionfn(dispatch);
    
                expect(getDataSpy).toHaveBeenCalled();
                expect(getDataSpy).toHaveBeenCalledTimes(1);
    
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(1);

                expect(dispatch.mock.calls[0]).toEqual([fetchOrderSuccess(response.data)]);

    
    
            })

        })
 
     
    })

   

    describe("FETCH_SUCCESS_ORDERS",()=>{
        it("should return FETCH_SUCCESS_ORDERS action obj",()=>{
            let data= [{id:1},{id:2}];
            let result = fetchOrderSuccess(data);
            expect(result).toStrictEqual({type: FETCH_SUCCESS_ORDERS,
                payload: data})
        })
    })

   
})
