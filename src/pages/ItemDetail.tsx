import { useLocation, useNavigate } from 'react-router-dom';
import { sellers } from '../data';

export default function ItemDetail() {
  const navigate = useNavigate();
  const {
    state: {
      item: {
        name,
        latinName,
        description,
        imageSrc,
        countryOfOrigin,
        sellerId,
        price,
      },
    },
  } = useLocation();

  const { id, storeName, avatarSrc } = sellers[sellerId];

  return (
    <div className='flex w-full justify-start gap-16 mt-10 p-4 flex-col lg:flex-row'>
      <img
        src={imageSrc}
        alt={`${name} image`}
        className='lg:h-96 rounded-xl'
      />
      <div className='h-40 lg:h-96 text-lg flex flex-col justify-between items-center'>
        <p className='text-4xl font-extrabold '>{name}</p>
        <p className='text-gray-400 font-bold text-lg mb-4 italic'>
          {latinName}
        </p>
        <p className='font-bold mb-2'>{description}</p>
        <p className='mb-4 italic font-bold text-gray-500'>
          Product of{' '}
          <span className=' text-gray-800 font-extrabold font'>
            {countryOfOrigin}
          </span>
        </p>

        <button
          className='w-80 h-16 bg-blue-500 text-white hover:opacity-80 transition-all rounded-2xl font-bold text-2xl '
          onClick={() => navigate('/confirm', { state: { name, sellerId } })}
        >{`$${price} - Buy now`}</button>
        <div className='flex gap-2 items-center'>
          <img
            src={avatarSrc}
            alt={`Seller ${id} image`}
            className='w-12 rounded-full '
          />
          <span className='font-semibold'>Sold by:</span>
          <span className='font-extrabold'>{`${storeName}, by ${id}`}</span>
        </div>
      </div>
    </div>
  );
}
