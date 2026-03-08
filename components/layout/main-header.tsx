import Link from 'next/link';

export default function MainHeader() {
  return (
    <header className="bg-blue-800 text-white p-4 " >
        <div className='flex items-center justify-between w-full'>
            <button className='bg-white w-10 h-10 rounded-full'></button>
            <nav className="container mx-auto flex space-x-4">
                <Link href="/" className="hover:underline">Главная</Link>
                <Link href="/about" className="hover:underline">О нас</Link>
                <Link href="/catalog" className="hover:underline">Каталог</Link>
                <Link href="/contacts" className="hover:underline">Контакты</Link>
            </nav>
        </div>
      
    </header>
  );
}
