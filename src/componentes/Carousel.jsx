import React, { useState } from 'react'

const imagesInitial = [
    'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJvcGF8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1699111156364-021c7878a2cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1699187129235-442d3f1ac069?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1694032212560-9bb7f43eece4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODB8fHxlbnwwfHx8fHw%3D',
    // 'https://images.unsplash.com/photo-1695051671250-2f2975972e9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D',
    // 'https://images.unsplash.com/photo-1687295602900-8767fbf06843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjB8fHxlbnwwfHx8fHw%3D',

]

function Carousel() {
        const [images, setImages] = useState([...imagesInitial])
    const [next,setNext] = useState(0)
    return (
        <>
            <div className='border  p-3 flex containerCarrusel'>

                {images.map(image =>{

                    return<div className='animationRight  child ml-[100px] bg-yellow-500  flex-none w-[150px] h-[300px] rounded'>
                    <img className='object-cover rounded' src={image} alt="" />
                </div>
                })}

                {/* <div className='animationRight child ml-[100px] bg-yellow-500  w-[200px] h-[300px] rounded'>
                    <img className='object-cover rounded' src={images[0]} alt="" />
                </div>
                <div className='animationRight  child ml-10 bg-yellow-500  w-[200px] h-[300px] rounded'>
                    <img className='object-cover rounded' src={images[1 + next]} alt="" />
                </div>
                <div className='animationRight child ml-10 bg-yellow-500  w-[200px] h-[300px] rounded'>
                    <img className='animationRight object-cover rounded' src={images[2 + next]} alt="" />
                </div>
                <div className=' animationRight  child ml-10 bg-yellow-500  w-[200px] h-[300px] rounded'>
                    <img className='object-cover rounded' src={images[3 + next]} alt="" />
                </div>
                <div className=' animationRight child ml-10 bg-yellow-500  w-[200px] h-[300px] rounded'>
                    <img className='object-cover rounded' src={images[4 + next]} alt="" />
                </div> */}

            </div>

            <button onClick={()=> setImages(e=> [...e.slice(1) , 'https://plus.unsplash.com/premium_photo-1668461477148-3624cd4f7b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTZ8fHxlbnwwfHx8fHw%3D'])} className='flex mx-auto p-2 w-[150px] mt-10 border rounded bg-blue-500 text-white justify-center items-center'>SIGUIENTE</button>
        </>

    )
}

export default Carousel