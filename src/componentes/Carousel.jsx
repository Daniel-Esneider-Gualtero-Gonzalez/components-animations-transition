import React, { useEffect, useRef, useState } from 'react'

const imagesInitial = [
    'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJvcGF8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1699111156364-021c7878a2cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1699187129235-442d3f1ac069?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1694032212560-9bb7f43eece4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODB8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1695051671250-2f2975972e9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1687295602900-8767fbf06843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjB8fHxlbnwwfHx8fHw%3D',

]

function Carousel() {
    const refCarrusel = useRef()
    const [images, setImages] = useState([...imagesInitial])
    const [next, setNext] = useState(0)



    useEffect(()=> {

        const options = {
            iterations: Infinity,
            duration: 0,     // Duración de la animación en milisegundos.
            easing: "ease-out", // Función de temporización.
        }

        const keyframe = [{ transform: 'translateX(100%)'}]


        if (next>0) {
            refCarrusel.current.firstElementChild.style.display = "block"
            setTimeout(() => {
                refCarrusel.current.firstElementChild.style.right = "500px"
            }, 1000);
        }else{
            // refCarrusel.current.firstElementChild.style.left = "50%"
            // refCarrusel.current.y
            refCarrusel.current.firstElementChild.style.right = "50%"
        }
    },[next])

    const nextImage = ()=>{
        refCarrusel.current.firstElementChild.style.right = "1800px"

        setTimeout(()=> {
            refCarrusel.current.firstElementChild.style.display="none" 
            refCarrusel.current.firstElementChild.style.right = "-1800px" 

            setTimeout(()=> setNext(e=> e+1) , 1000)
        } , 1000)
    }
    

    return (
        <>
            <div ref={refCarrusel} className='border relative h-[400px] justify-center overflow-hidden  p-3 flex containerCarrusel'>

                <img  className='absolute animationRight  w-[300px]' src={images[next]} alt="" />
            </div>

            <button onClick={() => nextImage()} className='flex mx-auto p-2 w-[150px] mt-10 border rounded bg-blue-500 text-white justify-center items-center'>SIGUIENTE</button>
        </>

    )
}

export default Carousel