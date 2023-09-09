import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import {
    RiComputerLine,
    RiEarthLine,
    RiCustomerService2Line,
    RiCalendarTodoLine,
    RiLogoutCircleRLine,
    RiArrowRightSLine,
    RiMenu3Line,
    RiCloseLine,
    RiSoundModuleLine,
    RiAdminFill,
    RiHomeSmile2Fill
} from "react-icons/ri";

import { FaJediOrder } from "react-icons/fa";

const Sidebar = () => {
    const [showMenuConfig, setShowMenuConfig] = useState(false);
    const [showSubmenuConfig, setShowSubmenuConfig] = useState(false);

    const [showMenuSeg, setShowMenuSeg] = useState(false);
    const [showSubmenuSeg, setShowSubmenuSeg] = useState(false);

    return (
        <>
            <div
                className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 
                p-4 flex flex-col justify-between z-50 ${showMenuConfig ? "left-0" : "-left-full"} ${showMenuSeg ? "left-0" : "-left-full"} transition-all`}
            >
                <div>
                    <h1 className="text-center text-2xl font-bold text-white flex items-center gap-4 px-16">
                        Admin
                    </h1>
                    <div className="text-center text-2xl font-bold text-white mb-3 flex items-center px-24">
                         <FaJediOrder className="text-iconosMenu" />                         
                    </div>
                    <ul>

                        <li>
                            <Link
                                to="/"
                                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors text-white"
                            >
                                <RiHomeSmile2Fill className="text-primary" /> Inicio
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/Casos"
                                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors text-white"
                            >
                                <RiComputerLine className="text-primary" /> Casos atención
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/Proyectos"
                                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors text-white"
                            >
                                <RiCalendarTodoLine className="text-primary" /> Proyectos
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={() => setShowSubmenuSeg(!showSubmenuSeg)}
                                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                            >
                                <span className="flex items-center gap-4 text-white">
                                    <RiAdminFill className="text-primary" /> Usuarios
                                </span>
                                <RiArrowRightSLine
                                    className={`mt-1 ${showSubmenuSeg && "rotate-90"} transition-all`}
                                />
                            </button>
                            <ul
                                className={`${showSubmenuSeg ? "h-[130px]" : "h-0"} overflow-y-hidden transition-all`}
                            >
                                <li>
                                    <Link
                                        to="/Usuarios"
                                        className="text-gray-500 py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute 
                                        before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4
                                        before:border-secondary-100 hover:text-white transition-colors"
                                    >
                                        Usuarios
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/Departamentos"
                                        className="text-gray-500 py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 
                                        before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                                    >
                                        Departamentos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/CambioClave"
                                        className="text-gray-500 py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 
                                        before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                                    >
                                        Cambio clave
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <button
                                onClick={() => setShowSubmenuConfig(!showSubmenuConfig)}
                                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                            >
                                <span className="flex items-center gap-4 text-white">
                                    <RiSoundModuleLine className="text-primary" /> Configuración
                                </span>
                                <RiArrowRightSLine
                                    className={`mt-1 ${showSubmenuConfig && "rotate-90"} transition-all`}
                                />
                            </button>
                            <ul
                                className={` ${showSubmenuConfig ? "h-[130px]" : "h-0"
                                    } overflow-y-hidden transition-all`}
                            >
                                <li>
                                    <Link
                                        to="/TipoCasos"
                                        className="text-gray-500 py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute 
                                        before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                                    >
                                        Tipo casos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/Estados"
                                        className="text-gray-500 py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 
                                        before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                                    >
                                        Estados
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <nav>
                    <Link
                        to="/"
                        className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                    >
                        <RiLogoutCircleRLine className="text-primary" /> Cerrar sesión
                    </Link>
                </nav>
            </div>
            <button
                onClick={() => setShowMenuConfig(!showMenuConfig) || setShowMenuSeg(!showMenuSeg)}
                className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
            >
                {showMenuConfig ? <RiCloseLine /> : <RiMenu3Line /> || showMenuSeg ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
        </>
    );
};

export default Sidebar;