import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-scroll';

const Nav = () => {

  const [menu, setMenu] = useState(false);

  const menuHamburguesa = () => {
    setMenu(!menu);
  };

  const cerrarMenu = () => {
    setMenu(false);
  };

  return (
    <nav className='flex justify-center m-auto'>
      <div className={`menuHamburguer bg-naranja ${menu ? 'translate-x-[0] ease-out duration-300 justify-center items-center' : 'translate-x-[500px] ease-out duration-300'} sm:translate-x-[0] m-0 rounded-none flex flex-col fixed top-0 w-[100vw] h-[100vh] z-10 sm:w-auto sm:h-auto sm:relative sm:flex sm:flex-row gap-10 px-10 py-3 sm:rounded-2xl bg-black sm:my-14`}>
        <Link className="text-white text-[10px] smd:text-[15px] cursor-pointer hover:text-yellow-950" to="inicio" duration={500} onClick={cerrarMenu}>
          INICIO
        </Link>
        <Link className="text-white text-[10px] smd:text-[15px] cursor-pointer hover:text-yellow-950" to="proyectos" duration={500} offset={-300} onClick={cerrarMenu}>
          PROYECTOS
        </Link>
        <Link className="text-white text-[10px] smd:text-[15px] cursor-pointer hover:text-yellow-950" to="habilidades" duration={500} offset={-200} onClick={cerrarMenu}>
          HABILIDADES
        </Link>
        <Link className="text-white text-[10px] smd:text-[15px] cursor-pointer hover:text-yellow-950" to="contacto" duration={500} onClick={cerrarMenu}>
          CONTÁCTAME
        </Link>
      </div>
      <div className={`flex-row gap-8 px-8 py-2 rounded-2xl bg-black my-8 sm:hidden text-white cursor-pointer z-20 ${menu ? 'translate-x-[120px] ease-out duration-300': 'translate-x-[0] ease-out duration-300'}`} onClick={menuHamburguesa}>
        <IoMenu />
      </div>
    </nav>
  )
}

export default Nav