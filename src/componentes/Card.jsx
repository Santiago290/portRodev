import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { CgMail } from "react-icons/cg";
import { GrGithub } from "react-icons/gr";
import imgPort from '../assets/imgPort.jpg'

const Card = () => {
  return (
    <div className='relative flex justify-center'>
        <div className="w-[100%] lg:w-[350px] lg:fixed bg-white text-black p-3 exm:p-6 rounded-3xl relative">
            <div className="aspect-square mt-3 exm:mt-auto mb-3 exm:mb-6 rounded-2xl overflow-hidden w-[250px] h-[250px] m-auto">
                 <img src={imgPort} alt="Foto de perfil" className="w-full h-full object-cover" style={{ backgroundColor: '#ff4500' }}/>
            </div>
            <h2 className="text-3xl mb-4 text-center font-bold ">SANTIAGO DEZA</h2>
            <div className="flex items-center justify-center mb-6 gap-3">
                <button className="bg-naranja text-white px-3 py-1 rounded-full text-sm hover:bg-yellow-950">Programador</button>
                <button className="bg-naranja text-white px-3 py-1 rounded-full text-sm hover:bg-yellow-950">
                    <a href="https://drive.google.com/file/d/1KIvzczuGGMFZmN562x2kZMO0NPUlR29-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Ver mi CV</a>
                </button>
            </div>
            <p className="text-gray-600 mb-6 text-center exm:px-0 px-5 leading-5">Soy un desarrollador que busca soluciones innovadoras</p>
            <div className="flex gap-4 justify-center items-center mb-6">
                <a href="https://www.linkedin.com/in/santiago-rodrigo-deza-chest-44638817b " target='_blank' className="text-naranja hover:text-yellow-950">
                    <TiSocialLinkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/Santiago290"  target='_blank'  className="text-naranja hover:text-yellow-950">
                    <GrGithub className="w-6 h-6" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card