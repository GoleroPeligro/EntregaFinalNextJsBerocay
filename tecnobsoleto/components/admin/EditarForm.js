"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import { db, storage } from "@/firebase/config"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import BtnVolver from "../ui/BtnVolver"




const updateProduct = async (slug, values, file) => {
    let fileURL = values.image

    if (file) {
        const storageRef = ref(storage, values.slug)
        const fileSnapshot = await uploadBytes(storageRef, file)
        fileURL = await getDownloadURL(fileSnapshot.ref)
    }

    const docRef = doc(db, "productos", slug)
    return updateDoc(docRef, {
        title: values.title,
        description: values.description,
        inStock: Number(values.inStock),
        price: Number(values.price),
        type: values.type,
        image: fileURL
    })
        .then(() => console.log("Producto actualizado correctamente"))
}


const EditForm = ({ item }) => {
    const { title, description, inStock, price, type, image } = item
    const [values, setValues] = useState({ title, description, inStock, price, type, image })
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await updateProduct(item.slug, values, file)
    }
return (
    <div className="container m-auto mt-8 mb-2 bg-win-gray-light w-1/2 min-w-min border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
      <div className="text-white bg-win-blue">
        <p className="ml-2 p-1">Editar Producto</p>
      </div>
      <form onSubmit={handleSubmit} className="m-5 p-4 ">
        <div className='mb-5 mt-5 '>
          <label
            htmlFor='title'
            className='mb-3 block text-base font-medium text-black'
          >
            Nombre
          </label>
          <input
            type='text'
            placeholder='Nombre'
            className='w-full border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md'
            name='title'
            value={values.title}
            onChange={handleChange}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='description'
            className='mb-3 block text-base font-medium text-black'
          >
            Descripción
          </label>
          <textarea
            rows={4}
            placeholder='Descripción del producto'
            className='w-full resize-none border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray  bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md'
            name='description'
            value={values.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='mb-5'>
          <label
            htmlFor='image'
            className='mb-3 block text-base font-medium text-black'
          >
            Imagen
          </label>
          <input
            type='file'
            className='w-full border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray  bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md'
            name='image'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className='mb-5'>
            <label
              htmlFor='inStock'
              className='mb-3 block text-base font-medium text-black'
            >
              Stock
            </label>
            <input
              type='number'
              placeholder='0'
              className='w-full border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray  bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md'
              name='inStock'
              value={values.inStock}
              onChange={handleChange}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='price'
              className='mb-3 block text-base font-medium text-black'
            >
              Precio
            </label>
            <input
              type='number'
              placeholder='0'
              className='w-full border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray  bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md'
              name='price'
              value={values.price}
              onChange={handleChange}
            />
          </div>
          <div className='mb-5 mt-5 '>
            <label
              htmlFor='type'
              className='mb-3 block text-base font-medium text-black'
            >
              Categoria
            </label>
            <input
              type='text'
              placeholder='Categoria'
              className='w-full border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md'
              name='type'
              value={values.type}
              onChange={handleChange}
            />
          </div>
          <div className='mb-5 mt-5 '>
            <label
              htmlFor='slug'
              className='mb-3 block text-base font-medium text-black'
            >
              Slug
            </label>
            <input
              type='text'
              placeholder='Slug'
              className='w-full border-2 border-l-win-btn-border-gray border-t-win-btn-border-gray bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-win-blue focus:shadow-md'
              name='slug'
              value={values.slug}
              onChange={handleChange}
            />
          </div>

          <div className='flex gap-4 my-8'>

            <Boton type='submit'>Enviar</Boton>

            <BtnVolver />
          </div>
      </form>

    </div>
  )
}


export default EditForm
