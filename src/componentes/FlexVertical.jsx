import { useEffect, useRef, useState } from "react"

function FlexVertical() {

    const refCompo = useRef()
    const [styles,setStyles] = useState(null)
    

    const apliColorElementsChilds = (element, color)=>{
        return element.style.background = `${color}`
    }

    const getPositionElementTop = (element) =>{
        return element.getBoundingClientRect().top
    }

    useEffect(()=> {

        window.document.addEventListener("scroll",()=>{

       
            const position = getPositionElementTop(refCompo.current)
            const positioFerstChild = getPositionElementTop(refCompo.current.firstElementChild)
            const positionLastChild = getPositionElementTop(refCompo.current.lastElementChild)

            
            if(position < window.innerHeight && position >= window.innerHeight -400){
                refCompo.current.classList.add("transition-opacity")
                setStyles({'opacity':'0.7'})
                
            }else setStyles(null)

            if(positioFerstChild < window.innerHeight && positioFerstChild >= window.innerHeight - 200 || positionLastChild < window.innerHeight) apliColorElementsChilds(refCompo.current.firstElementChild,'blue')
            if(positioFerstChild > window.innerHeight - 150 ) apliColorElementsChilds(refCompo.current.firstElementChild,'white')

            if(positionLastChild < window.innerHeight && positionLastChild >= window.innerHeight - 200  || positionLastChild < window.innerHeight) apliColorElementsChilds(refCompo.current.lastElementChild, 'blue')
            
            if(positionLastChild > window.innerHeight - 150 ) apliColorElementsChilds(refCompo.current.lastElementChild, 'white')
        })
    }, [])

   


    return (
      <div ref={refCompo} style={styles} className='bg-orange-300 w-[100px] flex-col justify-center  py-2 border border-black'>
          <div className='bg-transition w-[4px] h-[300px] mx-auto border border-blue-600'></div>
          <span className="mx-auto flex w-fit text-2xl my-1">✔</span>
          <div className='bg-transition w-[4px] h-[300px] mx-auto border border-blue-600'></div>
      </div>
    )
  }
  
  export default FlexVertical