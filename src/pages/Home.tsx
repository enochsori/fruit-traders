import ItemCard from '../components/ItemCard';
import { items } from '../data';
import { ItemDetail } from '../types/types';

export default function Home() {
  const itemList: ItemDetail[] = items;

  return (
    <div>
      <p className='mb-7 text-lg'>
        Welcome! we sell the finest fruits from this world and beyond!
      </p>
      <p className='font-extrabold'>Browse items :</p>
      <div className='grid mt-[50px] gap-20 grid-cols-3'>
        {itemList.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
