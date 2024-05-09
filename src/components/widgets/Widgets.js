import React from 'react'
import "./widgets.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AccountBalanceWalletOutlined, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material';
const Widgets = ({type}) => {
  let data;
  //for noe
  const amount = 100
  const diff = 20
  switch(type){
    case "user":
     data = {
        title: "CUSTOMERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlined className='icon'
        style={{
            backgroundColor: "rgba(128,0,128,0.2)",
            color: "purple"}}/>,
     };
     break;
     case "order":
        data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all Orders",
            icon: <ShoppingCartOutlined className='icon'
            style={{
                backgroundColor: "yellow",
                color: "green"}}/>,
         };
         break;
         case "earning":
        data = {
            title: "Earnings",
            isMoney: true,
            link: "View net earnings",
            icon: <MonetizationOnOutlined className='icon'
            style={{
                backgroundColor: "brown",
                color: "white"}}/>,
         };
         break;
         case "balance":
        data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: <AccountBalanceWalletOutlined className='icon'
            style={{
                backgroundColor: "rgba(128,0,128,0.2)",
                color: "purple"}}/>
         };
         break;
         default:
            break;
  }





  return (
    <div className='widget'>
        <div className='left'>
           <span className='title'>{data.title}</span>
           <span className='counter'>{data.isMoney && "$"}{amount}</span>
           <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
          <KeyboardArrowUpIcon/>{diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets