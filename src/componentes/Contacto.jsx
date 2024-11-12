import React from 'react'
import App from '../App'

const Contacto = () => {
  return (
    <div>
        <div className="mt-10 smd:mt-16 mb-8">
            <h1 className="titulo text-white">CONTACTO</h1>
            <h1 className="titulo text-oscuro">CONTACT ME</h1>
        </div>
        <div id="contacto" className="flex items-center w-full justify-center lg:justify-start">
            <form className="w-[90%]" action="https://formsubmit.co/santi_pro14@hotmail.com" method="POST">
                <div className="flex-col smd:flex-row flex space-x-0 smd:space-x-4">
                    <div className="w-full smd:w-1/2">
                        <label className="text-[12px] smd:text-[16px] block text-gray-300 mb-1" htmlFor="name">Nombre</label>
                        <input type="text" id="nombre" autoComplete="off" placeholder="Tu nombre y apellido" className="placeholder:text-[12px] smd:placeholder:text-[16px] w-full px-3 py-2 bg-gray-800 text-gray-200 rounded-md outline-none focus:ring-2 focus:ring-orange-500"/>
                    </div>
                    <div className="w-full smd:w-1/2">
                        <label className="text-[12px] smd:text-[16px] block text-gray-300 mb-1" htmlFor="email">Correo</label>
                        <input type="email" id="email" autoComplete="off" placeholder="tucorreo@email.com" className="placeholder:text-[12px] smd:placeholder:text-[16px] w-full px-3 py-2 bg-gray-800 text-gray-200 rounded-md outline-none focus:ring-2 focus:ring-orange-500"/>
                    </div>
                </div>
                <div>
                    <label className="text-[12px] smd:text-[16px] block text-gray-300 mb-1" htmlFor="telefono">Teléfono</label>
                    <input type="telefono" id="telefono" autoComplete="off" placeholder="Teléfono" className="placeholder:text-[12px] smd:placeholder:text-[16px] w-full px-3 py-2 bg-gray-800 text-gray-200 rounded-md outline-none focus:ring-2 focus:ring-orange-500"/>
                </div>
                <div>
                    <label className="text-[12px] smd:text-[16px] block text-gray-300 mb-1" htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje"placeholder="Mensaje"className="placeholder:text-[12px] smd:placeholder:text-[16px] w-full h-32 px-3 py-2 bg-gray-800 text-gray-200 rounded-md outline-none resize-none focus:ring-2 focus:ring-orange-500"></textarea>
                </div>
                <input type="hidden" name="_autoresponse" value="Mensaje Enviado"></input>
                <button type="submit" className="text-[14px] smd:text-[16px] w-full py-2 mt-4 font-semibold text-white bg-naranja rounded-md hover:bg-naranja focus:ring-2 focus:ring-naranja focus:outline-none">Enviar</button>
            </form>
    </div>
    </div>
  )
}

export default Contacto