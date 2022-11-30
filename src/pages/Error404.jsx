

import React from 'react'

export default function Error404() {
  return (
    <div className='flex h-96 justify-center items-center flex-col'>
        <h1 className='font-bold text-5xl'>Error404</h1>
        <p className='my-5 text-xl'>La página a la que intentas acceder no existe 🐧</p>
        <a href='/' className='text-xl hover:text-indigo-900 hover:underline hover:font-bold'>Regresar al inicio</a>
    </div>
  )
}
