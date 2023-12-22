import Boton from "@/components/ui/Boton"
import BtnVolver from "@/components/ui/BtnVolver"
import Link from "next/link"

const Nosotros = () => {
  return (
    <div className="container m-auto mt-8 mb-2 bg-win-gray-light w-3/4 min-w-min border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
      <div className="text-white bg-win-blue">
        <p className="ml-2 p-1">Nosotros</p>
      </div>
      <article className='m-8'>
        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Id neque aliquam vestibulum morbi blandit cursus risus at. Etiam non quam lacus suspendisse faucibus. In arcu cursus euismod quis viverra nibh cras pulvinar. Dignissim sodales ut eu sem integer vitae. Nec tincidunt praesent semper feugiat nibh sed. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.

          Rutrum quisque non tellus orci ac auctor augue. Eget mi proin sed libero. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Nisl condimentum id venenatis a condimentum vitae. Fusce id velit ut tortor. Eu scelerisque felis imperdiet proin fermentum leo vel. Congue eu consequat ac felis donec et odio pellentesque diam. Nisi est sit amet facilisis. Fermentum dui faucibus in ornare. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.

          Scelerisque viverra mauris in aliquam sem fringilla ut. Arcu dictum varius duis at consectetur lorem. In mollis nunc sed id semper risus in hendrerit gravida. Consequat nisl vel pretium lectus quam id leo. Egestas purus viverra accumsan in nisl nisi scelerisque. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Lectus arcu bibendum at varius vel pharetra. Purus non enim praesent elementum facilisis leo. Praesent semper feugiat nibh sed pulvinar. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Urna neque viverra justo nec ultrices dui sapien eget mi. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Fringilla phasellus faucibus scelerisque eleifend. Quisque non tellus orci ac auctor. Tincidunt eget nullam non nisi est. Vitae semper quis lectus nulla at volutpat.</p>
        <div className='flex gap-4 my-8'>
          <Link href={"/productos/all"}>
            <Boton>Ver productos</Boton>
          </Link>
          <BtnVolver />
        </div>

      </article>
    </div>
  )
}

export default Nosotros