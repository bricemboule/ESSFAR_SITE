import React from 'react'

const Section = () => {
  return (
    <div className='flex items-center justify-around gap-10 h-15'>

       <div className='text-5xl'>
          <span className='text-sky-600 font-tangeri'>L'école</span> <span className='text-sky-400 font-tangeri'>Autre</span><span className='text-red-400 font-tangeri'>ment</span>
        </div>
       <div className='w-[50%] text-4xl font-extrabold font-tangeri'>
          <span className='animate-pulse bg-gradient-to-r from-sky-600 via-sky-400 to-red-600 bg-clip-text text-transparent'>Offres des bourses en Master Actuariat et Statistiques Big Data pour la poursuite d'étude a l'etranger chez nos partenaires</span>
       </div>

    </div>
  )
}

export default Section