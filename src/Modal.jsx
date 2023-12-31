import React, { useState } from 'react'

function Modal({title="Title Modal por defauldt",closeModal,accept = Function, children}) {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className='  bg-white  z-50 fixed flex flex-col mx-auto mt-20  p-2  left-0 right-0    w-[340px] sm:w-[500px] h-[340px] md:w-[600px] md:h-[400px] border border-black'>
            <div className=' border flex  justify-end py-3'> <button  onClick={()=> closeModal()} className='w-[60px] h-[40px]  hover:bg-red-600 hover:border-none border-red-600 bg-transition justify-center items-center rounded text-2xl border '>🧩</button> </div>
            <h1 className='  whitespace-nowrap text-ellipsis overflow-hidden h-10 text-center  text-sm font-semibold mt-3'>{title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste veritatis quisquam, ea vero eligendi quos magni nulla ipsum quam tempore! Exercitationem facilis assumenda aliquam excepturi ullam consequuntur voluptas illum.</h1>




            <section className=' mt-1 border relative   overflow-auto'>{children}</section>

            <div className='justify-center flex items-end mt-auto border  py-2 '>
                    
                    <button onClick={()=> accept()} className='border mx-2 flex justify-center items-center w-[100px] h-[40px] rounded border-green-600 bg-transition hover:bg-green-600 hover:text-white '>Aceptar</button>
                    <button onClick={()=> closeModal()} className='border flex justify-center items-center w-[100px] h-[40px] rounded border-red-600 bg-transition hover:bg-red-600 hover:text-white '>Cancelar</button>
                   
                </div>



        </div>
    )
}

export default Modal