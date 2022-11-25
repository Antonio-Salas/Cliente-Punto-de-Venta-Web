

import React from 'react'

export default function Perfil() {
  return (
    <div className='container mx-10 p-5'>
      <h1 className='text-lg font-medium leading-6 text-gray-900'>Perfil</h1>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <div className='flex justify-around mx-20'>
        <h2 className=' text-indigo-900 font-semibold'>Nombre de usuario:</h2>
        <h2>Antonio</h2>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <div className='flex justify-around mx-20'>
        <h2 className=' text-indigo-900 font-semibold'>Nombre:</h2>
        <h2>Jose Antonio Salas Portugal</h2>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <div className='flex justify-around mx-20'>
        <h2 className=' text-indigo-900 font-semibold'>Correo eléctronico</h2>
        <h2>antonio.salas255@gmail.com</h2>
      </div>
    </div>
  )
}
