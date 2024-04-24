import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const underLineClass =
    'absolute w-12 border border-t-4 border-brand rounded-md left-[3px]';

  return (
    <header className='w-full flex justify-between items-center p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex hover:opacity-80'>
        <img
          src='/images/logo.jpg'
          alt='Logo image'
          className='w-16 rounded-lg mr-4'
        />
        <h1 className=' font-bold text-brand text-4xl'>Fruit Emporium</h1>
      </Link>

      <nav className='flex items-center gap-6 font-bold text-lg'>
        <Link to='/' className='relative'>
          <span className={`${pathname === '/' && 'text-brand'}`}>Home</span>
          {pathname === '/' && <div className={underLineClass}></div>}
        </Link>
        <Link to='/about' className='relative'>
          <span className={`${pathname === '/about' && 'text-brand'}`}>
            About
          </span>
          {pathname === '/about' && <div className={underLineClass}></div>}
        </Link>
      </nav>
    </header>
  );
}
