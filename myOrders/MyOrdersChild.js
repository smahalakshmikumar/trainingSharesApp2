import React ,{useState}from "react";
import NavigationBar from "../ui/NavigationBar";
import { Button,Label } from "react-bootstrap";
import { Field } from "formik";

/**
 * Displays list of orders
 * @returns orderchild component
 */
const MyOrdersChild=({objArray,totalPrice,totalQuantity,sellClick,userorders})=>{
 const[quantityValue,setQuantity]=useState(0);
  /**
   * @returns triggers parent sell click
   */
    const sellClickTrigger=(data,quantityValue)=>{
         sellClick(data,quantityValue);
    }
  
const updateQuantity=(newQuantity,index)=>{
  if(newQuantity==null || newQuantity==""){newQuantity=""}
     userorders[index].sellQuantity=newQuantity;
      setQuantity(newQuantity);

    }

    return (
        <>
          <NavigationBar/>
          <div class="row">
              <div class="col-md-8">
              {objArray != null && objArray.length > 0 ? (
        <div class="card" style={{ width: "40rem", margin: "20px" }}>
          <div class="card-header">
            <h4>My Orders</h4>
            <h6>My shares:{totalQuantity}</h6>
            <h6>Shares worth:Rs.{totalPrice}</h6>
          </div>
          {userorders?.map((data,index) => (
            < div style={{ margin: "20px" }}>
              <h5 style={{ color: "blue" }}>Share Name: {data.shareName} </h5>
              <p>Number of Shares:  {data.quantity}</p>
              <p>Price:Rs.{data.totalPrice}</p>
            
             <div class="card-footer"><Button variant="danger" 
             onClick={()=>sellClickTrigger(data,quantityValue)}
                 id="sellButton">Sell Share</Button>
                <span class="label label-primary" style={{marginLeft:"10px"}}>Quantity:</span>
<input type="number" value={data.sellQuantity} key={index}
 onChange={e => updateQuantity(e.target.value,index)}  
 style={{marginLeft:"10px"}}></input>
                 </div>              
             </div>
          ))} 
          
        </div>
      ) : <h1>Book Shares</h1>
      }
              </div>
              <div class="col-md-4">
              <div class="card" style={{ width: "18rem", margin: "20px" }}>
          <div class="card-header">
            <h4>Wallet Balance</h4>
          </div>
          <div>
          <h5 style={{ color: "blue" }}>Rs.</h5>
          </div>
          </div>
              </div>
          </div>
        </>
      );
}
export default React.memo(MyOrdersChild);
