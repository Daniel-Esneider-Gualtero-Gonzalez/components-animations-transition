import React, { useEffect, useRef } from 'react'




function SelectCard() {

    const refContainerCards = useRef()

    useEffect(() => {
        // Obtener el ancho total de la ventana (pantalla)
        const ejeX = window.innerWidth / 2;

        const ejeY = window.innerHeight / 2;

        const rectCard = document.querySelector(".selectCard").getBoundingClientRect()

        const rectCard2 = document.querySelector(".selectCard2").getBoundingClientRect()

        // Calcular el centro de la pantalla en el eje X


        console.log("coordenanda X de la ventana:", ejeX);
        console.log("coordenada Y de la vnetana", ejeY)
        console.log("client rect del elemento Card", rectCard)
        console.log("rect DE CARD 2 ", rectCard2)

        console.log("ancho del elemento divido entre dos para sacar la mitad", rectCard.width / 2)
        console.log("tranlate x final ", (ejeX - (rectCard.width / 2)))

        console.log(" si el ejeX del elemento es mayor que el ejeX de la ventana  se debe hacer el translate con - el menos de lo contrario normal")

        console.log("----------------------------------------")
        console.log("alto del contenedor de las cards", refContainerCards.current.clientHeight / 2)
        console.log("altura final de la card seleccionada", (refContainerCards.current.clientHeight / 2) + (rectCard.height / 2))


        // document.querySelector(".selectCard").style.transform = `translateX(${(ejeX - (rectCard.width / 2))}px)`
        // document.querySelector(".selectCard2").style.transform += `translateY(-${(ejeY) - (rectCard.height / 2)}px)`

        // document.querySelector(".selectCard").style.transform = `translate(${(refContainerCards.current.clientHeight / 2) - (rectCard.height / 2)}px , translateX(${ (ejeX - (rectCard.width / 2))}px))`

    }, [])

    const animateCardSelect = (element) => {
        const ejeX = window.innerWidth / 2;
        const ejeY = window.innerHeight / 2;
        const rectCard = element.getBoundingClientRect()
        
        if(rectCard.x > ejeX){
            element.style.transform = `translateX(-${(ejeX - (rectCard.width / 2))}px)`
        }else{
            element.style.transform = `translateX(${(ejeX - (rectCard.width / 2))}px)`
        }

        if(rectCard.y > ejeY){
            element.style.transform += `translateY(-${(refContainerCards.current.clientHeight / 2) - (rectCard.height / 2)}px)`
        }else{
            element.style.transform += `translateY(${(refContainerCards.current.clientHeight / 2) - (rectCard.height / 2)}px)`
        }
        
        
    }
    return (
        <div ref={refContainerCards} className=' relative border h-[700px] border-black p-1'>
            {/* <div onClick={(e)=> animateCardSelect(e.target)} className='selectCard     transition-all duration-300 ease-out  rounded bg-gray-600 w-[250px] h-[250px]'></div> */}
            <div onClick={(e)=> animateCardSelect(e.target)}  className='selectCard     transition-all duration-300 ease-out  rounded bg-gray-600 w-[150px] sm:w-[250px] h-[250px]'></div>

            <div onClick={(e)=> animateCardSelect(e.target)}  className='selectCard2 mt-10 absolute bottom-0    transition-all duration-300 ease-out  rounded bg-green-600 w-[150px] sm:w-[250px] h-[250px]'></div>
        </div>
    )
}

export default SelectCard