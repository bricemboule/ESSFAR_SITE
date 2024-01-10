import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({Links, title}) => {
  return (
    <div>
    
        <ul>
            <h1 className='font-semibold mb-1'>{title}</h1>

            {Links.map((lien)=>(

                <li key={lien.name}>
                    <Link className='text-gray-500 hiver:text-teal-400 duration-300 text-sm cursor-pointer leading-6 ' to={lien.Link}>{lien.name}</Link>
                </li>
            ))}
        </ul>
    
    </div>
  )
}

export default Item