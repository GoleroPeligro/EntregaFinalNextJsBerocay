"use client"
import { useState } from 'react'
import Boton from '../ui/Boton'
import BtnVolver from '../ui/BtnVolver'
import { useAuthContext } from '../context/AuthContext'

const LoginForm = () => {
  const { createUser, loginUser, googleLogin} = useAuthContext()
  const [values, setValues] = useState({
    email: '',
    password: ''
  })


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  return (

    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-win-blue bg-opacity-25">
      <div className=" container m-auto mt-8 mb-2 bg-win-gray-light w-1/3 min-w-min border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
        <div className="text-white bg-win-blue">
          <p className="ml-2 p-1">Login</p>
        </div>
        <form onSubmit={handleSubmit} className="bm-5 p-4 ">
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-black'
          >
            Email
          </label>
          <input
            type="email"
            value={values.email}
            required
            placeholder="Tu email"
            className="w-full border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray bg-white py-1 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md"
            name="email"
            onChange={handleChange}
          />
          <label
            htmlFor='password'
            className='mb-2 mt-4 block text-base font-medium text-black'
          >
            Contraseña
          </label>
          <input
            type="password"
            value={values.password}
            required
            placeholder="Tu password"
            className="w-full border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray bg-white py-1 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md"
            name="password"
            onChange={handleChange}
          />
          <div className='flex gap-4 my-8'>

            <Boton onClick={() => loginUser(values)} >Ingresar</Boton>
            <Boton onClick={() => createUser(values)}>Registrarme</Boton>
            <Boton onClick={googleLogin}>Iniciar con Google</Boton>
            <BtnVolver />
          </div>
        </form>
      </div>
    </div>
  )
}


export default LoginForm
