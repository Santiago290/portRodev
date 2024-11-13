import React from 'react'
import imgPro1 from '../assets/imgProy1.svg'
import imgPro2 from '../assets/imgProy2.svg'
import imgPro3 from '../assets/imgProy3.svg'

const Proyectos = () => {
    const projectos = [
        {
          id: 1,
          title: "Cuarto Bar",
          subtitle: "Pagina de informacion de licores",
          image: imgPro1,
          href: "https://www.cuartobar.com"
        },
        {
          id: 2,
          title: "Argos Natural",
          subtitle: "Pagina acerca de Gomas vegetales", 
          image: imgPro2,
          href: "https://santiago290.github.io/argosNatural"
        },
        {
            id: 3,
            title: "Jarana Studio",
            subtitle: "Proyecto en proceso", 
            image: imgPro3,
            href: "https://santiago290.github.io/jarana/"
          },
      ]
    return (
    <div>
        <div className="mt-14 smd:mt-20">
            <h2 className="titulo text-white">PROYECTOS</h2>
            <h2 className="titulo text-oscuro">RECIENTES</h2>
        </div>
        <div id="proyectos" className='mt-2 sm:mt-6 max-w-[90%] m-auto md:mx-0'>
            {projectos.map((proyecto)=>(
                <a href={proyecto.href} target="_blank" key={proyecto.id}>
                    <div className='cursor-pointer py-[20px] px-[0] smd:px-[20px] hover:bg-[rgba(0,0,0,0.3)] hover:rounded-xl'>
                        <div className="flex gap-6 items-center">
                            <div className="w-20 h-20 md:w-36 md:h-36 rounded-lg overflow-hidden flex justify-center items-center">
                                <img src={proyecto.image} alt={proyecto.title} className="w-[100%] h-[100%] object-contain"/>
                            </div>
                            <div className="flex-1 pt-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-[16px] smd:text-[20px] font-semibold text-white">{proyecto.title}</h3>
                                        <p className="text-[13px] smd:text-[20px]  text-zinc-500">{proyecto.subtitle}</p>
                                    </div>
                                    <svg className="hidden md:block w-6 h-6 text-amarillo -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Proyectos