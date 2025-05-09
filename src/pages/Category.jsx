import React, { useEffect, useState } from 'react'
import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate } from 'react-router';
import { IoCartSharp } from "react-icons/io5";
import { getAllCategory } from '../services/catogeryServices';

const Category = () => {
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    const handleLoginNavigate = () => {
        navigate("/login");
    };

    const handleCartNavigate = () => {
        navigate("/cart");
    };

    const handleOrderNavigate = () => {
        navigate("/order");
    };

    const handleWishlistNavigate = () => {
        navigate("/wishlist");
    };

    const fetchCategory = async () => {
        try {
            const response = await getAllCategory();
            setCategory(response.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div className="w-full">
            {/* Header */}
            <div className="w-full h-14 bg-blue-500 flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                    <HiArrowLeft onClick={()=>navigate('/')} className="text-white cursor-pointer" size={22} />
                    <p className="text-white text-lg font-medium">All Categories</p>
                </div>
                <div className="flex items-center gap-4">
                    <IoCartSharp className="text-white cursor-pointer" size={25} />
                    <button onClick={()=>navigate('/login')} className="text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-500 transition duration-200">
                        Login
                    </button>
                </div>
            </div>

            {/* Category List */}
            <div className="flex flex-wrap gap-6 justify-center px-4 py-6">
                {category &&
                    category.map((item, index) => (
                        <div
                            onClick={()=>navigate(`/categories/${item.name.toLowerCase()}`)}
                            key={index}
                            className="w-[120px]  flex flex-col items-center bg-white border rounded-lg shadow hover:shadow-md transition duration-200 p-2"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[80px] h-[80px] object-cover rounded-full"
                            />
                            <p className="text-sm text-center mt-2 font-medium text-gray-700">
                                {item.name}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Category