import { HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'

const IndexConentSurgery = ({ surgery }) => {

    const handleClickButton = (id) => {
        console.log(id)
        let element = document.getElementById(id)
        element.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <ol className=' font-medium text-primary list-decimal space-y-1 list-inside text-xl'>
                <li>
                    <button type='button' onClick={() => handleClickButton('descriptionSection')}>
                        {surgery.name}
                    </button>
                </li>
                <li>
                    <button type='button' onClick={() => handleClickButton('doctorSection')}>
                        Medicos
                    </button>
                </li>
                <li>
                    <button type='button' onClick={() => handleClickButton('imageSection')}>
                        Imagenes
                    </button>
                </li>
                <li>
                    <button type='button' onClick={() => handleClickButton('relatedSurgeriesSection')}>
                        Tratameintos relacionadas
                    </button>
                </li>
                <li>
                    <button type='button' onClick={() => handleClickButton('priceSection')}>
                        Precios
                    </button>
                </li>
            </ol>
        </div>
    )
}


export default IndexConentSurgery
