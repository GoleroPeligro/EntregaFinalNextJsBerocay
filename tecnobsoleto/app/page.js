
import Boton from '@/components/ui/Boton'
import logo from '@/public/img/logo.png'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <div className="container m-auto mt-8 mb-2 bg-win-gray-light w-3/4 min-w-min border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
        <div className="text-white bg-win-blue">
          <p className="ml-2 p-1">Inicio</p>
        </div>
        <section className='m-4'>
          <Image
            alt="logo"
            src={logo}
            height={400}
            width='auto'
          />
        </section>
        <hr className="border-2 border-t-win-btn-border-gray border-b-white" />
        <article className='m-8'>
          <p className='text-lg'>Bienvenido/a a Tecnobsoleto, somos una tienda online dedicada a rescatar y vender artículos tecnológicos considerados obsoletos y así poder darles una nueva vida y reducir los desechos tecnológicos cada vez mas abundantes en el mundo. Gracias por visitar nuestra tienda.</p>
          <div className='my-8'>
            <Link href={"/productos/all"}>
              <Boton>Ver productos</Boton>
            </Link>
          </div>

        </article>
      </div>

    </main>

  )
}
