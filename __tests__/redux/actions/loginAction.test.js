import {Login,Logout} from "../../../components/redux/actions/loginAction";
import { LOG_IN, LOG_OUT} from "../../../components/redux/actions/actionTypes";


describe("Login actions",()=>{

    describe("Login actions",()=>{
        it("should return Login action obj",()=>{
            let users= [{id:1,userName:"moni"}];
            let result = Login(users);
            expect(result).toStrictEqual({type: LOG_IN,
                payload: users})
        })
    })

    describe("Logout actions",()=>{
        it("should return Logout action obj",()=>{
            let id=1;
            let result = Logout(id);
            expect(result).toStrictEqual({type: LOG_OUT,
                payload: id})
        })
    })

    
})