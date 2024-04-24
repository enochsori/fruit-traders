import { useNavigate } from 'react-router-dom';
import { ItemDetail } from '../types/types';

type Props = {
  item: ItemDetail;
};

export default function ItemCard({ item }: Props) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/${item.id}`, { state: { item } });
  };

  return (
    <li
      className='bg-white flex flex-col justify-center items-center rounded-2xl p-5 text-black shadow-2xl cursor-pointer hover:opacity-80'
      onClick={handleOnClick}
    >
      <img
        src={item.imageSrc}
        alt='Item image'
        className='rounded-lg w-[60%] -mt-12 shadow-lg'
      />
      <p className='text-3xl font-bold mt-6'>{item.name}</p>
      <div className='h-1.5 w-28 bg-gray-300 my-6 rounded-b-full'></div>
      <p className=' text-gray-600'>{item.latinName}</p>
    </li>
  );
}
