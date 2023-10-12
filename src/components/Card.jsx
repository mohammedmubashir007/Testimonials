import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'


function Card(props) {

    let review = props.review;

    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img className='aspect-square rounded-full w-[120px] h-[120px] z-[25]' alt="profile_image" src={review.image} />
                <div className='w-[120px] h-[120px] bg-violet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px]'></div>
            </div>

            <div className='text-center m-3'>
                <p className='font-bold text-2xl capitalize'>{review.name}</p>
                <p className='text-violet-300 uppercase text-sm '>{review.job}</p>
            </div>
            <div className='text-violet-400 mx-auto '>
                <FaQuoteLeft />
            </div>
            <div className='uppertext text-center text-slate-500'>
                <p>{review.text}</p>
            </div>
            <div className='text-violet-400 mx-auto mt-3'>
                <FaQuoteRight />
            </div>

        </div>
    )
}

export default Card