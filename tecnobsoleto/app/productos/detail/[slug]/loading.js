'use client'
import Image from 'next/image'



const Loading = () => {



    return(
        <div className='conteiner m-auto w-full flex justify-center pt-8 mb-2 mt-2'>
             <article className="felx w-96  bg-win-gray-light border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray p-1">
        <div className="text-white bg-win-blue">
            <p className="ml-2 p-1 animate-pulse">Cargando...</p>
        </div>
        <div className="border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray mt-2">
                <div className="container m-auto items-center h-56 w-80 sm:w-80 border-r-white:border-b-white border-t-win-btn-border-gray border-l-win-btn-border-gray ">
                     <Image
                        alt='Icono cargando'
                        src= {'/img/loadImage.gif'}
                        height={24}
                        width={24}
                        className="object-contain h-56 w-80 sm:w-80 items-center"
                    />

                </div>


                <div className="px-4 border-t border-gray-200 pb-4 sm:text-left text-center">
                    <h4 className="text-sm my-4 animate-pulse">...</h4>

                </div>
        </div>

    </article>
        </div>
       
)
    
}

export default Loading