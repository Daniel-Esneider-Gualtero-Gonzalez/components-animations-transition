import { useEffect, useRef } from "react"
import { animationBurbuja } from "./burbuja"

function CardsProfile({titleCard = "tittle card default" , iconCard = "component icons  o text"}) {
  const refCardProfile = useRef()
  useEffect(()=>{

    
    const { cleanAnimations} = animationBurbuja(refCardProfile.current)

    return cleanAnimations

  },[])
  return (
    <div className="w-[200px] border h-[150px] bg-violet-600  flex  justify-center items-center mx-2" ref={refCardProfile}>

      <div>
          Your Balance
      </div>

      <div>
          🔖
      </div>

    </div>
  )
}

export default CardsProfile