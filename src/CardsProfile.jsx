import { useEffect, useRef } from "react"
import { animateBurbuja } from "./burbuja"

function CardsProfile() {
  const refCardProfile = useRef()
  useEffect(()=>{

    
    const { cleanAnimations} = animateBurbuja(refCardProfile.current)

    return cleanAnimations

  },[])
  return (
    <div className="w-[200px] border h-[150px] bg-blue-400   mx-2" ref={refCardProfile}>CardsProfile</div>
  )
}

export default CardsProfile