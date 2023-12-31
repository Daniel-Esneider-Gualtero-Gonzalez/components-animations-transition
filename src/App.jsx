import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlexVertical from './componentes/FlexVertical'
import Modal from './Modal'
import CardsProfile from './CardsProfile'
import ContenidoTransitionHeight from './ContenidoTransitionHeight'
import ScrollAnimationContainer from './ScrollAnimationContainer'
import Carousel from './componentes/Carousel'
import SelectCard from './componentes/SelectCard'
import AnimationMovement from './componentes/AnimationMovement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* <Modal /> */}

    <h1>Mostran contenido con transicion de altura o anchura</h1>

    <div className='contentbar'>
      <h1>Transicion para la propiedad Height</h1>
    <div className='bar'></div>
    </div>

    <div className='mt-10 border transitionBackground'>
      <h1>Transition con la propiedad backgroundColor</h1>

      <div className=' '></div>

    </div>

    <div className='transitionRotate mt-10'>
    <h1>Transition con la propiedad Rotate</h1>
      <div></div>
    </div>

    <div className='transition-shadow'>
      <h1>Transition de la propiedad shadow</h1>

      <div>
         
         
      </div>
    </div>


    <div className=' mt-10'>
      <h1>Transition + animacion de border para que sea parecido a una burbuja </h1>

      <div className='flex  containerCardProfile  bg-red-400 border p-3  border-black justify-center'>
      <CardsProfile />
      <CardsProfile />
      <CardsProfile />
      </div>
    </div>

    <h1 className='mt-8'>Componente para envolver contenido que este oculto con un estado que lo muestra</h1>
    <ContenidoTransitionHeight title='Acount information'>
      <div className='h-[200px]'>
        sfsfsfsfsfsfs
      </div>
    </ContenidoTransitionHeight>
    
    <h1 className='mt-8'>ScrollAnimation Container</h1>
    <ScrollAnimationContainer>
      <div className='flex-none mx-1 w-[300px] h-[100px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[100px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[100px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[100px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[100px] bg-yellow-900 rounded'></div>
      <div className='flex-none mx-1 w-[300px] h-[100px] bg-yellow-900 rounded'></div>
    </ScrollAnimationContainer>

    <h1>Carrusel manual que se ven las demas elementos al fondo</h1>
    <Carousel />

    <h1 className='mt-10'>Carrusel manual que se ven las demas elementos al fondo</h1>
    <SelectCard />

    <h1>Animation movement</h1>
   <div className='relative border border-black h-[500px] bg-gray-900'>
    <AnimationMovement />
    <AnimationMovement />
    <AnimationMovement />
    <AnimationMovement />
    <AnimationMovement />
    <AnimationMovement />
    <AnimationMovement />
    <AnimationMovement />
    <AnimationMovement />
    <AnimationMovement />
    <AnimationMovement />
   </div>
    

    <div className='w-[100px] h-[800px]'></div>
    <div className=''>
    <FlexVertical />
    <FlexVertical />
    </div>


    
    
    </>
  )
}

export default App
