import Link from 'next/link';
export default function Catalog() {
  return (
    <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Католог</h1>
       <div className='flex space-x-15'>
            <div className="space-y-3">
              <div className='border p-6 rounded border-gray-300 h-60 w-60 items-center flex'></div>
              <div className="">
                <Link href="/catalog/product" className=''>Товар</Link>
              </div>
              <div className='flex space-x-3 items-center'>
                <p>20 000 руб</p>
                <a href='/catalog/product' className='px-12 py-2 bg-blue-800 rounded text-white'>Купить</a>
              </div>
            </div>

            <div className="space-y-3">
              <div className='border p-6 rounded border-gray-300 h-60 w-60 items-center flex'></div>
              <div className="">
                  <Link href="/catalog/product" className=''>Товар</Link>
              </div>
              <div className='flex space-x-3 items-center'>
                <p>20 000 руб</p>
                <a href='/catalog/product' className='px-12 py-2 bg-blue-800 rounded text-white'>Купить</a>
              </div>
            </div>

            <div className="space-y-3">
              <div className='border p-6 rounded border-gray-300 h-60 w-60 items-center flex'></div>
              <div className="">
                  <Link href="/catalog/product" className=''>Товар</Link>
              </div>
              <div className='flex space-x-3 items-center'>
                <p>20 000 руб</p>
                <a href='/catalog/product' className='px-12 py-2 bg-blue-800 rounded text-white'>Купить</a>
              </div>
            </div>

            <div className="space-y-3">
              <div className='border p-6 rounded border-gray-300 h-60 w-60 items-center flex'></div>
              <div className="">
                  <Link href="/catalog/product" className=''>Товар</Link>
              </div>
              <div className='flex space-x-3 items-center'>
                <p>20 000 руб</p>
                <a href='/catalog/product' className='px-12 py-2 bg-blue-800 rounded text-white'>Купить</a>
              </div>
            </div>
          </div>
    </div>
  );
}
