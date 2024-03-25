import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { links } from './Lien';
import { GoChevronDown, GoChevronUp} from "react-icons/go";

const NavLink = () => {

  const [heading, setHeading] = useState("");
  
  return (
    
    <>
      {links.map((l)=>(

        <div>
          <div className='px-3 text-left md:cursor-pointer group'>
            <h1 className='py-7 hover:text-blue-500 flex justify-between items-center md:pr-0 pr-5' onClick={()=> heading !== l.nom ? setHeading(l.nom) : setHeading("")}> 
            
                {l.nom} 

                <span className='md:mt-1 md:ml-2 md:block inline group-hover:rotate-180 group-hover:-mt-2'> 
                    {heading===l.nom ? <GoChevronDown/> : <GoChevronUp/>}
                </span>
            </h1>
            
              { l.submenu && (
                  <div>
                      <div className='absolute top-30 hidden group-hover:md:block hover:md:block hover:z-1'>
                          <div className='py-3'>
                            <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                          </div>
                          <div className='bg-white p-3.5 '>
                              {l.liens.map((sublin) =>(
                                <div className=''>
                                    {sublin.lien.map((line)=>(
                                      <div className='hover:bg-blue-500 hover:text-white h-10'>
                                        <li className='text-sm p-3 hover:text-white'>
                                            <Link to={line.link} className='text-base pt5'> {line.nom}</Link>
                                        </li>
                                      </div>
                                    ))}
                                </div>
                              ))}
                          </div>
                      </div>
                  </div>
                )
              }
          </div>

          {/* Menu mobile */}
          <div className={`
              ${heading === l.nom ? 'md:hidden' : 'hidden'}
          `}>
             {
              l.liens.map((sublink)=>(

                <div>
                    
                    <div>
                        {
                          sublink.lien.map((sublien)=>(
                            <li className='py-3 pl-14'>
                                <Link to={sublien.link}> {sublien.nom}</Link>
                            </li>
                          ))
                        }
                    </div>
                </div>
              ))
             }
          </div>

       
        </div>
      ))}
    </>
  );
}

export default NavLink