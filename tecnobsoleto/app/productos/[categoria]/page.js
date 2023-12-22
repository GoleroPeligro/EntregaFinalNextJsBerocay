
import ProductList from "@/components/products/ProductList"

export const generateMetadata = async ({ params }) => {
    return {
        title: 'tecnobsoleto - ' + params.categoria
    }
}

export function generateStaticParams(){
    return [
        {categoria: 'all'},
        {categoria: 'tvs'},
        {categoria: 'reproductores_de_musica'},
        {categoria: 'celulares'}
    ]
}

export const revalidate = 36000

const Productos = async ({ params }) => {

    const { categoria } = params


    return (
        <div className="container m-auto pt-8 mb-2">


            <section className="flex justify-center items-center gap-10 flex-wrap mt-2">
                <ProductList categoria={categoria}/>
                {/* {items.map(product => <ProductCard key={product.slug} item={product} />)} */}
            </section>
        </div>
    )
}

export default Productos