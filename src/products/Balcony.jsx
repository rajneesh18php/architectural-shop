import React from 'react'
import './Css/Bolcony.css'
import { FaShoppingCart } from "react-icons/fa";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const Balcony = () => {
    const bolconyreling=[
        {_id:1,text:"Luxury Dining Chair",images:'/Images/fe1.jpg',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
        {_id:2,text:"Modern Coffee Table",images:'/Images/fa2.webp',style:"12,999", icone:<FaShoppingCart/>, cross:"20,999"},
        {_id:3,text:"Contemporary Side Table",images:'/Images/fa3.jpg',style:"10,999", icone:<FaShoppingCart/>, cross:"18,999"},
        {_id:4,text:"Elegant Wooden Cabinet",images:'/Images/fa4.jpg',style:"15,999", icone:<FaShoppingCart/>, cross:"25,999"},
        {_id:5,text:"Stylish Bookshelf",images:'/Images/fa5.jpg',style:"9,999", icone:<FaShoppingCart/>, cross:"17,999"},
        {_id:6,text:"Comfortable Recliner Chair",images:'/Images/fa6.jpg',style:"14,999", icone:<FaShoppingCart/>, cross:"22,999"},
        {_id:7,text:"Modern TV Stand",images:'/Images/fa7.jpg',style:"11,999", icone:<FaShoppingCart/>, cross:"19,999"},
        {_id:8,text:"Contemporary Dining Table",images:'/Images/fa8.jpg',style:"18,999", icone:<FaShoppingCart/>, cross:"30,999"},
    ]
  return (
    <>
    <Header/>




    <Footer/>
    </>
  )
}

export default Balcony
