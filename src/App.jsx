import './App.css'
import React from 'react'
import Proyectos from './componentes/Proyectos'
import Habilidades from './componentes/Habilidades'
import Contacto from './componentes/Contacto'
import Footer from './componentes/Footer'
import SobreMi from './componentes/SobreMi'
import Card from './componentes/Card'
import Nav from './componentes/Nav'

function App() {
  return (
    <div className='w-full'>
      <header id='inicio' className='w-[60%] m-auto'>
        <Nav />
      </header>
      <main className='w-[90%] lg:w-[60%] m-auto'>
        <div className='justify-center grid lg:grid-cols-[400px,710px] lg:w-full gap-0 xl:gap-8 md:w-[750px] w-full m-auto'>
          <Card></Card>
          <div className=' md:w-[750px] mt-[50px]'>
            <SobreMi></SobreMi>
            <Proyectos></Proyectos>
            <Habilidades></Habilidades>
            <Contacto></Contacto>
          </div>
        </div> 
      </main> 
      <footer className='w-[60%] m-auto'>
        <Footer></Footer>  
      </footer>
    </div>
  )
}

export default App
