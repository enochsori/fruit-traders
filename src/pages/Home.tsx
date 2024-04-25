import ItemCard from '../components/ItemCard';
import { useDataContext } from '../context/DataContext';

export default function Home() {
  // use Context
  const data = useDataContext();
  const { itemList } = data;

  return (
    <div className='px-20 md:px-6'>
      <p className='mb-7 text-lg'>
        Welcome! we sell the finest fruits from this world and beyond!
      </p>
      <p className='font-extrabold'>Browse items :</p>
      <ul className=' mt-[50px] gap-20 md:grid md:grid-cols-2 xl:grid-cols-3'>
        {itemList.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
