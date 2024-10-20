import React, { useContext } from 'react'
import { TiHeartFullOutline } from "react-icons/ti";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import images3 from "../assets/images3.png"
import { ApiData } from './ContextApi';
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ShopFirstInner = ({allPage}) => {
    let {info, loading} = useContext(ApiData);
    
    
    
    
  return (
    
    <>
    {allPage.map((item) => (
       
     <div className="w-full sm:w-1/2 md:w-[32%]   lg:w-1/4 border-[2px] border-[#262626]">
     

     <div className="relative group overflow-hidden w-full justify-between">
     <Link to={`/shop/${item.id}`}>
         <img className='w-full justify-between' src={item.thumbnail} alt="" />
         </Link>
        
         <ul className='text-end bg-[#ffffffe0] absolute left-0 h-[150px] duration-300 ease-in-out bottom-[-180px] w-full group-hover:bottom-0 p-4'>
             <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Add to Wish List <FaHeart className='inline-block text-[25px] pl-1' /></li>
             <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Compare <FaCodeCompare className='inline-block text-[20px] pl-1' /></li>
             <li className='py-1 text-[16px] text-[#262626] font-DMs font-bold'>Add to Cart <FaShoppingCart className='inline-block text-[20px] pl-1' /></li>
         </ul>
         <div className="absolute top-[20px] left-[20px]">
             <button className='h-[35px] w-[92px] bg-black text-white text-[14px] font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out'>New</button>
         </div>

        

         <div className="flex justify-between pl-2">
                    <div className="">
                        <h3 className='text-[#262626] font-bold text-[20px] font-DMs'>{item.title}</h3>
                        <h4 className='text-[#767676] font-normal text-[16px] font-DMs'>{item.brand}</h4>
    
                    </div>
                    <p className='text-[#767676] font-normal text-[16px] font-DMs pr-2'>${item.price}</p>
                    
                </div>
     </div>
     
 </div>
        
        

    ))}
    
    </>
  )
}

export default ShopFirstInner
