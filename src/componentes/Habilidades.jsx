import React from 'react'
import css from "../assets/icons/css.svg"
import html from "../assets/icons/html.svg"
import javascript from "../assets/icons/javascript.svg"
import git from "../assets/icons/git.svg"
import react from "../assets/icons/react.svg"
import figma from "../assets/icons/figma.svg"

const Habilidades = () => {
    const habilidades = [
        {
          name: "HTML",
          description: "Lenguaje Hipertexto",
          icon: html,
        },
        {
          name: "CSS",
          description: "Herramienta de estilos",
          icon: css,
        },
        {
          name: "JavaScript",
          description: "Lenguaje de Programación",
          icon: javascript,
        },
        {
          name: "React",
          description: "Libreria de React",
          icon: react,
        },
        {
          name: "Figma",
          description: "Diseño UI/UX",
          icon: figma,
        },
        {
          name: "Git",
          description: "Control de Versiones",
          icon: git,
        },
      ]
    return (
        <div>
            <div id="habilidades" className="mt-10 smd:mt-16 mb-8">
                <h2 className="text-white text-[30px] lg:text-[60px] font-bold leading-[0.9] lg:text-start text-center">HABILIDADES</h2>
            </div>
            <div >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {habilidades.map((habl) => (
                    <div key={habl.name} className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-800/50 cursor-pointer">
                        <div className="h-14 w-14 rounded-xl bg-white flex items-center justify-center border-0">
                            <img src={habl.icon} alt="" className="w-[40px] h-[40px] object-contain" />
                        </div>
                        <div>
                            <h3 className="text-white text-[15px] smd:text-[22px] font-semibold">{habl.name}</h3>
                            <p className="text-zinc-400 text-[12px] sm:text-[15px]">{habl.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Habilidades