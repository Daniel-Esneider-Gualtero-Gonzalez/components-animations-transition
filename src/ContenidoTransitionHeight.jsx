import React, { useRef, useState ,useEffect} from 'react'

function ContenidoTransitionHeight({title="title of content",children}) {
    
    const refSectionContent = useRef()
    const [showContent,setShowContent] = useState(false)
    

    useEffect(()=>{

        if(showContent){
            
            refSectionContent.current.style.height = `${refSectionContent.current.scrollHeight}px`
           
        }else{
            refSectionContent.current.style.height = "0px"
            
        }

    },[showContent])
  return (
    <div className=' border p-4 border-black'>
        <div className='flex  items-center border'>
        <h1>{title}</h1>
        <button onClick={()=> setShowContent(!showContent)} className='ml-5 rounded p-2 border text-xl'>{showContent ? "⬆️"  : "⬇️"}</button>
        </div>

        {/* se realiza el calculo de la altura del contenido dentro de section para poder realizar la transition o la otra seria definir la altura padre para que la transition funcione con % */}
        <section className={`ml-8 border border-yellow-500 transitionHeight overflow-hidden`} ref={refSectionContent}>
        {children}
        </section>

        
    </div>
  )
}

export default ContenidoTransitionHeight