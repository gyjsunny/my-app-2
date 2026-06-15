import { createContext } from "react";


function caculateTotal(cartList){
  // const array = cartList.map((item)=>{
  //   return item.quantity * item.price
  // })
  // const total = array.reduce((a,b)=>{
  //   return a+b
  // },0)
  return cartList.map((item)=> item.quantity * item.price)
    .reduce((a,b)=> a+b,0)
}

export const initialState = {
    cartList:[]
}

export const CartReducer = (state,action)=>{
    console.log("#1  ",state,action)
    const cartList= [...state.cartList]
    // 取得購物車目前索引值
    const index = cartList.findIndex((item)=> item.id === action.payload.id)
    console.log(index)
    switch(action.type){
        case 'ADD_TO_CART':
            if(index === -1){
            cartList.push(action.payload)
            }else{
            cartList[index].quantity += action.payload.quantity
            }        

            return {
            ...state,
            cartList,
            total: caculateTotal(cartList)
            };
        case 'CHANGE_CART_QUANTITY':
            cartList[index].quantity = action.payload.quantity
            
            return {
            ...state,
            cartList,
            total:caculateTotal(cartList)
            };
        case 'REMOVE_CART_ITEM':
            cartList.splice(index,1)
            return{
            ...state,
            cartList,
            total:caculateTotal(cartList)
            }
        default:
            return state
        }
    }

export const CartContext = createContext({})