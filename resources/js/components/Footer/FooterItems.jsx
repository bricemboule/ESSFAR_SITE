import React from 'react'
import Item from './Item'
import { CiLocationOn } from "react-icons/ci";
import { ESSFAR,FORMATIONS,INTERNATIONAL,ENTREPRISES, Icons } from './Men'

const FooterItems = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-15 py-16 '>
        <Item Links={ESSFAR} title='ESSFAR'/>
        <Item Links={FORMATIONS} title='FORMATIONS'/>
        <Item Links={INTERNATIONAL} title='INTERNATIONAL'/>
        <Item Links={ENTREPRISES} title='ENTREPRISES'/>
        <Item Links={Icons} title='Nous Contacter'/>
      
    </div>
  )
}

export default FooterItems