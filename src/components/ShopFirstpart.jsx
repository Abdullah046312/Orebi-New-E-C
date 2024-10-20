import React, { useContext, useState } from 'react';
import Container from './Container';
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus, FaMinus, FaHeart,  FaShoppingCart } from "react-icons/fa";



import { Link } from 'react-router-dom';
import ShopFirstInner from './ShopFirstInner';
import { ApiData } from './ContextApi';
import Pagination from './Pagination';

const ShopFirstpart = () => {
    let {info, Loading} = useContext(ApiData)
    let [show, setShow] = useState(false);
    let [currentPage, setCurrentPage] = useState(1);
    let [perPage, setPerPage] = useState(6);

    let lastPage = currentPage * perPage
    let fistPage = lastPage - perPage

    let allPage = info.slice(fistPage, lastPage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil(info.length / perPage); i++){
        pageNumber.push(i)

    }

    console.log(pageNumber);
    

    
    console.log(allPage);
    
    
  
    


  
    
    
    return (
        <section>
            <Container>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/5">
                        <div>
                            <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Products</h2>
                            <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
                                <Link to="/">Home</Link>
                                <li><IoIosArrowForward /></li>
                                <li>Products</li>
                            </ul>
                        </div>
                        <div className="mt-[80px]">
                            <div className="flex justify-start gap-[20px] items-center cursor-pointer" onClick={() => setShow(!show)}>
                                <h2 className='text-[#262626] font-bold font-DMs text-[20px]'>Shop by Category</h2>
                                {show ? <FaMinus /> : <FaPlus />}
                            </div>
                            {show && (
                                <ul className="mt-3">
                                    {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'].map((category, index) => (
                                        <li key={index} className='text-[16px] font-DMs font-normal text-[#767676] mt-3'>{category}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    

                    <div className="md:w-4/5 mt-[200px]">
                        <div className="flex justify-end items-center gap-[20px] mb-10">
                            <div>
                                <label className='pr-3' htmlFor="">Sort By:</label>
                                <select className="w-[120px] h-[30px] border-[2px] border-[#262626]">
                                    {['One', 'Two', 'Three', 'Four', 'Five'].map((option, index) => (
                                        <option key={index} value={option.toLowerCase()}>{option}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className='pr-3' htmlFor="">Show By:</label>
                                <select className="w-[120px] h-[30px] border-[2px] border-[#262626]">
                                    {['One', 'Two', 'Three', 'Four', 'Five'].map((option, index) => (
                                        <option key={index} value={option.toLowerCase()}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        </div>
                        </div>
                        
                        <div className="flex gap-5 flex-wrap w-full justify-center mt-10">
                         <ShopFirstInner allPage={allPage} />
                         <div className="flex justify-center w-full">
                         <Pagination pageNumber={pageNumber}/>

                         </div>
                            {/* Add more product cards here */}
                        </div>
                    
                
            </Container>
        </section>
    );
};

export default ShopFirstpart;
