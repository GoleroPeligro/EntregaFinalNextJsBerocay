'use client'
import { useState } from "react"
import Boton from "@/components/ui/Boton"
import BtnVolver from "@/components/ui/BtnVolver"


const Contacto = () => {
  const [values, setValues] = useState ({
    nombre: '',
    email :'',
    mensaje : ''

  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
     })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:3000/api/contacto',
    {
      method: "POST",
      body: JSON.stringify(values)
    })
    
    e.target.reset();

  }

  return (
    <div className="container m-auto mt-8 mb-2 bg-win-gray-light w-3/4 min-w-min border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
      <div className="text-white bg-win-blue">
        <p className="ml-2 p-1">Contacto</p>
      </div>
      <form onSubmit={handleSubmit} className="m-5 p-4 ">
        <div className='mb-5 mt-5 '>
          <label
            htmlFor='name'
            className='mb-3 block text-base font-medium text-black'
          >
            Nombre completo
          </label>
          <input
            type='text'
            placeholder='Nombre completo'
            className='w-full border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md'
            name='nombre'
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-black'
          >
            Dirección de correo electrónico
          </label>
          <input
            type='email'
            placeholder='ejemplo@dominio.com'
            className='w-full border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray  bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md'
            name='email'
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-black'
          >
            Mensaje
          </label>
          <textarea
            rows={4}
            placeholder='Escribí tu mensaje'
            className='w-full resize-none border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray  bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md'
            name='mensaje'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='flex gap-4 my-8'>

          <Boton type='submit'>Enviar</Boton>

          <BtnVolver />
        </div>
      </form>

    </div>
  )
}
export default Contacto