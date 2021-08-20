import axios from "axios";
import { deleteData, getData, postData, putData,patchData } from "../../components/api/api"


jest.mock('axios')
describe("given api call",()=>{

    describe("when get Data",()=>{
        describe("when success",()=>{
            it("should return success",async()=>{
                let response={data:[{id:1},{id:1}]};
                axios.get.mockImplementation(()=> Promise.resolve(response));
                await expect(getData('restaurant')).resolves.toEqual(response);
            })
        })

        describe("when failure",()=>{
            it("should return failure",async()=>{
                let error="error occured";
                axios.get.mockImplementation(()=> Promise.reject(new Error(error)));
                await expect(getData('restaurant')).rejects.toThrow(error);
            })
        })
    })
    
    describe("when put Data",()=>{
        describe("when success",()=>{
            it("should return success",async()=>{
                let response={data:"success"};
                axios.put.mockImplementation(()=> Promise.resolve(response));
                await expect(putData('restaurant',{id:2,food:"dosa"})).resolves.toEqual(response);
            })
        })

        describe("when failure",()=>{
            it("should return failure",async()=>{
                let error="error occured";
                axios.put.mockImplementation(()=> Promise.reject(new Error(error)));
                await expect(putData('restaurant',{})).rejects.toThrow(error);
            })
        })
    })

    describe("when post Data",()=>{
        describe("when success",()=>{
            it("should return success",async()=>{
                let response={data:"success"};
                axios.post.mockImplementation(()=> Promise.resolve(response));
                await expect(postData('restaurant',{id:2,food:"dosa"})).resolves.toEqual(response);
            })
        })

        describe("when failure",()=>{
            it("should return failure",async()=>{
                let error="error occured";
                axios.post.mockImplementation(()=> Promise.reject(new Error(error)));
                await expect(postData('restaurant',{})).rejects.toThrow(error);
            })
        })
    })

    describe("when Delete Data",()=>{
        describe("when success",()=>{
            it("should return success",async()=>{
                let response={data:"success"};
                axios.delete.mockImplementation(()=> Promise.resolve(response));
                await expect(deleteData('restaurant/1')).resolves.toEqual(response);
            })
        })

        describe("when failure",()=>{
            it("should return failure",async()=>{
                let error="error occured";
                axios.delete.mockImplementation(()=> Promise.reject(new Error(error)));
                await expect(deleteData('restaurant/1')).rejects.toThrow(error);
            })
        })
    })

    describe("when patchData Data",()=>{
        describe("when success",()=>{
            it("should return success",async()=>{
                let response={data:"success"};
                axios.patch.mockImplementation(()=> Promise.resolve(response));
                await expect(patchData('restaurant/1')).resolves.toEqual(response);
            })
        })

        describe("when failure",()=>{
            it("should return failure",async()=>{
                let error="error occured";
                axios.patch.mockImplementation(()=> Promise.reject(new Error(error)));
                await expect(patchData('restaurant/1')).rejects.toThrow(error);
            })
        })
    })
})