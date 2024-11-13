import React from 'react'
import { useState,useEffect } from 'react'



const SobreMi = () => {
  return (
    <div className='text-center lg:text-start'>
        <div className='text-center lg:text-start'>
            <h1 className="text-[45px] smd:text-[80px] lg:text-[110px] font-bold text-white leading-[0.9]">SOFTWARE</h1>
            <h2 className="text-oscuro text-[45px] smd:text-[80px] lg:text-[110px] font-bold text-gray-700 leading-[0.9]">ENGINEER</h2>
        </div>
        <p className="m text-gray-400 text-[14px] md:text-[16px] mt-5 md:max-w-[80%] m-auto lg:mx-0">Soy un desarrollador web apasionado por la tecnologia y el diseño, siempre buscando aprender y mejorar en cada proyecto.</p>
        <h2 className='text-[18px] smd:text-[20px] font-bold text-white mt-4'>Sobre mi</h2>
        <p className="text-gray-400 text-[14px] md:text-[16px] mt-5 md:max-w-[80%] m-auto lg:mx-0">Soy un desarrollador web apasionado por la tecnologia y el diseño, siempre buscando aprender y mejorar en cada proyecto.
          Siempre ha sentido una gran curiosidad por la tecnología y el poder de la programación. Mi pasión comenzó con HTML, 
          CSS y JavaScript, donde me divertía creando pequeños proyectos, viendo cómo unas pocas líneas de código podían dar vida a algo nuevo. Desde entonces, 
          he seguido avanzando y aprendiendo con herramientas como React y Node.js, entre otros, disfrutando cada paso y cada momento.
          <br/><br/>
          Cada proyecto es una oportunidad para poner a prueba mis habilidades y aprender algo nuevo, y me motiva saber que 
          siempre puedo seguir creciendo y perfeccionando mi trabajo. 
        </p>
    </div>
  )
}

export default SobreMi