import React from 'react'
import Img from '../../images/ac1.jpg'
import Img2 from '../../images/big.webp'
import Img3 from '../../images/finance.jpg'
import Img4 from '../../images/eBihar.jpg'

const FormationsData = [
    {
      id: 1,
      img: Img,
      name: "Actuariat",
      description:
        "Devenez un expert en gestion de risque.",
    },
    {
      id: 2,
      img: Img2,
      name: "Statistiques et Big Data",
      description:
        "Devenez un expert en gestion de donnees",
    },
    {
      id: 3,
      img: Img3,
      name: "Ingenierie Financiere",
      description:
        "Devenez un expert en Finances",
    },
    {
        id: 4,
        img: Img4,
        name: "Master Specialise",
        description:
          "Devenez un expert en IA",
      },
  ];

const Fromation = () => {
  return (
    <>
      
      <div className="">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">Nos Specialites</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-5 place-items-center">
            {FormationsData.map((formation) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-blue-400 dark:hover:bg-blue-400 hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[80px] ">
                  <img
                    src={formation.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full"
                  />
                </div>
                <div className="p-3 text-center">
                  <h1 className="text-xl font-bold">{formation.name}</h1>
                  <p className="text-gray-800 group-hover:text-white duration-high text-sm line-clamp-2">
                    {formation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Fromation