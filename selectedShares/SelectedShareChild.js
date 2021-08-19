import React from 'react'
import NavigationBar from '../../ui/NavigationBar';
import Paper from '@material-ui/core/Paper';
import { Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {postShareOrder} from "../../redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';


/**
 * Displays SelectedShareChild
 * @returns SelectedShareChild component
 */
 const SelectedShareChild=({selectedShare,dispatch,history})=>{
    const state = useSelector((state) => state?.users?.usersList);
    const {id} = state[0];
    return (
        <div class="container-fluid">
        <NavigationBar/>
        <h1>Share details</h1>
        
        <div class="row">
          <div class="col-md-4" style={{margin:"20px"}}>
              <h3 style={{color:"blue"}}>{selectedShare.shareName}</h3> 
              <h6>About Company: {selectedShare.aboutCompany}</h6>
                  <h6>Managed by: {selectedShare.managingDirector}</h6>
                  <p>Price: Rs. {selectedShare.sharePrice}</p>
              </div>
              {/* Buy Shares */}
              {/* <div class="col-md-3">
              <Paper elevation={3}  style={{width:"22rem",margin:"10px"}}>
                        <div class="card-header"><strong style={{color:"green"}}>Buy Shares</strong></div>
                        <div class="card-title">Shares:{selectedShare.shareName}</div>
                        <div class="card-title">Price:Rs.{selectedShare.sharePrice}</div>
                        <p class="card-text"></p>
                        <div class="card-footer">
                            <Button id="buyButton"
                            >
                               Buy
                            </Button>
                        </div>
               </Paper>
              </div>
             */}
              <div class="col-md-8" style={{margin:"-20px"}}>
                    <Formik
                    initialValues={{
                        sharesQuantity:0,
                    }}
                    validationSchema={Yup.object().shape({
                        sharesQuantity: Yup.string().required("Quantiy is required"),
                    })}
                    onSubmit={async(fields) => {
                    //   let items = {"userId":id,"quantity": fields.sharesQuantity,
                    //   "shareName":selectedShare.shareName, 
                    //   "sharePrice": selectedShare.sharePrice,
                    //  "totalPrice":totalPrice, "isSold": false,};
                      try {
                           let response= await axios.get("http://localhost:8000/userorders/");
                           console.log(response.data)
                           console.log(selectedShare.shareName)
                           let filteredData=response.data.filter((item) => item.shareName == selectedShare.shareName)
                           if(filteredData.length>0){
                            let totalPrice=(fields.sharesQuantity * filteredData[0].sharePrice) +  filteredData[0].totalPrice
                            let quantity= fields.sharesQuantity + filteredData[0].quantity;
                            let items = {"quantity": quantity,"totalPrice":totalPrice}
                            await axios.patch(`http://localhost:8000/userorders/${filteredData[0].id}`,items); 
                            history.push('/myOrders');
                           }
                           else{
                                  let items = {"userId":id,"quantity": fields.sharesQuantity,
                                 "shareName":selectedShare.shareName, 
                                 "sharePrice": selectedShare.sharePrice,
                                 "totalPrice":selectedShare.sharePrice*fields.sharesQuantity, "isSold": false,};
                                    dispatch(postShareOrder(items))
                                    history.push('/myOrders');


                           }
                          
                      } catch (error) {
                        console.log(error.message);
                      }
                    }}
                    render={({ errors, touched }) => (
                        <Form className="form"> 
                            <div class="row">
                                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div class="card card-signin my-5">
                                    <div class="card-body">
                                    <h5 class="card-title text-center">Buy Shares</h5>
                                    <div class="form-label-group">
                                        <label htmlFor="sharesQuantity">Shares Quantity</label>
                                        <Field
                                        name="sharesQuantity"
                                        type="number"
                                        className={
                                            "form-control" +
                                            (errors.sharesQuantity && touched.sharesQuantity
                                            ? " is-invalid"
                                            : "")
                                        }
                                        />
                                        <ErrorMessage
                                        name="sharesQuantity"
                                        component="div"
                                        className="invalid-feedback"
                                        />
                                    </div>
                                    <strong>Price:Rs.{selectedShare.sharePrice}</strong>
                                    <button
                                        class="btn btn-lg btn-primary btn-block text-uppercase"
                                        type="submit"
                                        style={{ margin: "10px" }}
                                    >
                                        Buy
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Form>
                    )}
                    />
                </div>
     
            </div>  
       
        </div>           
  );
}
export default React.memo(SelectedShareChild);
