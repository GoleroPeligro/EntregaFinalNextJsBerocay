"use client"

import Boton from '@/components/ui/Boton';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import errorIcon from '@/public/img/error-icon.png';

const NotFound = () => {
    const router = useRouter()

    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-max h-full mt-8 border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray'>
                <div className="text-white bg-win-blue">
                    <p className="px-2">Error</p>
                </div>
                <div className="bg-win-gray-light p-2">
                    <section className='flex items-center justify-center'>
                        <Image
                            alt='Error icon'
                            src={errorIcon}
                            height={50}
                            width={'auto'}
                        />
                        <h2 className='font-bold px-4'>ERROR: Página no encontada</h2>

                    </section>
                    <hr className=' w-full border-2 border-t-win-btn-border-gray border-b-white my-4' />

                    <div className='px-2'>
                        <Boton onClick={() => router.back()}>Volver</Boton>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NotFound