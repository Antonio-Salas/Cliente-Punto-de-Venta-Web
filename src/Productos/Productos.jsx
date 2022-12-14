

const products = [
  {
    id: 1,
    name: 'Playera básica',
    href: '#',
    imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/61BkeNFccNL._AC_SL1200_.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Negro',
  },
  {
    id: 2,
    name: 'Playera básica',
    href: '#',
    imageSrc: 'https://www.elpalaciodehierro.com/on/demandware.static/-/Sites-palacio-master-catalog/default/dwa9d472fd/images/40546713/negro/large/40546713_x1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$50',
    color: 'Blanco',
  },
  {
    id: 3,
    name: 'Playera básica',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$40',
    color: 'Gris',
  },
  {
    id: 4,
    name: 'Playera básica',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Crema',
  },
  // More products...
]

export default function Productos({productos}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productos.map((producto) => (
            <div key={producto.idproducto} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src="https://www.elpalaciodehierro.com/on/demandware.static/-/Sites-palacio-master-catalog/default/dwa9d472fd/images/40546713/negro/large/40546713_x1.jpg"
                  // alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`producto/${producto.idproducto}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {producto.nombre}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">${producto.precio_venta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}