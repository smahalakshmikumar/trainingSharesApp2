import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyOrdersChild from "./MyOrdersChild"
import {fetchOrders,deleteOrder} from "../redux/actions/orderAction"
import axios from "axios"

/**
 * Displays list of orders
 * @returns order component
 */
const MyOrders = () => {
  const userLoggedin = useSelector((state) => state?.users?.usersList);
  const orders = useSelector((state) => state?.orders);
  const { userorders } = orders.confirmedShares;
  let dispatch = useDispatch();
  const { id } = userLoggedin[0];

  console.log("order",userorders);
  /**grouping list data based on share name */
  const groups = userorders?.reduce((groups, item) => ({
    ...groups,
    [item.shareName]: [...(groups[item.shareName] || []), item]
  }), {}
  );
  
  

  /**forming array */
  const objArray = [];
  if(groups!=null){
    Object.keys(groups).forEach(key => objArray.push({
      shareName: key,
     shareValues: groups[key]
    }));
    console.log("array",objArray)
  }
 
  
 
  /**
   * to calculate total price
   * @returns sum value of individual shares
   */
   objArray?.map((data) =>{
    let sum=0,quantity=0;
    data.shareValues.map((share)=>{
       sum=sum+share.totalPrice;
       quantity=quantity+share.quantity;
       data.newTotalPrice=sum;
       data.totalQuantity=quantity;
       return sum,quantity;
    });
})

 /**
   * to calculate total price
   * @returns sum value of Total shares bought
   */
  const totalPrice = () => {
    let sum = 0;
    objArray?.map((data) =>{
        data.shareValues.map((value) => {
      sum = sum + value.totalPrice;

    });
   
    });
    console.log(sum)
    return sum;
  };
  const totalQuantity = () => {
    let quantity = 0;
    objArray?.map((data) =>{
        data.shareValues.map((value) => {
            quantity = quantity + value.quantity;
    });
    
    });
    console.log(quantity)
    return quantity;
  };

  /**
   * @returns sell click dispatch action to redux
   */
  const sellClick=async(data,quantityValue)=>{
      // dispatch(deleteOrder(id,quantityValue));
      if(data.sellQuantity>0 && data.sellQuantity<= data.quantity){
        let quantity= data.quantity - data.sellQuantity;
        let totalPrice= data.totalPrice -  (data.sellQuantity*data.sharePrice)
        console.log(totalPrice);
        let items = {"quantity": quantity,"totalPrice":totalPrice}
        await axios.patch(`http://localhost:8000/userorders/${data.id}`,items);
        dispatch(fetchOrders(id));
      }
      else{
        window.alert("check quantity values")
      }
     

  }



  /**
   * getting user orders from DB
   * @returns Dispatch get axios call
   */
  useEffect(() => {
    dispatch(fetchOrders(id));
  }, []);

  return (
      <MyOrdersChild userorders={userorders} sellClick={sellClick}
       objArray={objArray} totalQuantity={totalQuantity()}
      totalPrice={totalPrice()} />
  );
};

export default React.memo(MyOrders);