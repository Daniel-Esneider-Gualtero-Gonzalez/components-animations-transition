import React, { useEffect, useRef } from 'react'

function ScrollAnimationContainer({children}) {
    const refScrollContainer = useRef()
    let isScrollingRight = true;
    function animateScrollElement() {
        // cardOcul()
        
        
      if (isScrollingRight) {
            console.log("scroll")
        refScrollContainer.current.scrollLeft += 0.55; // Ajusta la velocidad de scroll
        if (refScrollContainer.current.scrollLeft >= refScrollContainer.current.scrollWidth - refScrollContainer.current.clientWidth) {
          isScrollingRight = false;
        }
      } else {
        refScrollContainer.current.scrollLeft -= 0.55; // Ajusta la velocidad de retroceso
        if (refScrollContainer.current.scrollLeft <= 0) {
          isScrollingRight = true;
        }
      }

      const idAnimationFrame = requestAnimationFrame(animateScrollElement)
      const clearAnimationLeft = ()=> cancelAnimationFrame(idAnimationFrame)
      return {clearAnimationLeft}
      
    }
    useEffect(()=> {
      const idAnimationFrame = animateScrollElement()
       return function (params) {
        return cancelAnimationFrame(idAnimationFrame)
       }
        // return cancelAnimationFrame(idAnimationScrollFrame)
    }, [])
  return (
    <div ref={refScrollContainer} className='border p-1 flex overflow-hidden'>
        {children}
    </div>
  )
}

export default ScrollAnimationContainer