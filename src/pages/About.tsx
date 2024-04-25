import { sellers } from '../data';

export default function About() {
  return (
    <div className='px-20 md:px-6 lg:px-4'>
      <h1 className='font-bold text-xl text-gray-700 mb-2'>
        Fruit emporium is founded on a very simple principle:
        <b> Fruit is good.</b>
      </h1>
      <img
        src='/images/bg-about.jpg'
        alt='fruits image'
        className='h-80 w-full object-cover rounded-2xl shadow-2xl mb-6'
      />
      <p className='font-bold text-lg text-gray-700'>
        Welcome to our <b>Fruit Emporium</b>, where we pride ourselves on
        offering the finest selection of produce from across the globe. From
        tangy citrus delights to lusciously sweet cherries, we curate a
        collection that embodies the pinnacle of flavor and freshness. Our
        network of world-class sellers ensures that every fruit you receive is
        of unparalleled quality, worthy of gracing the auction floors of
        esteemed Asian markets. Explore our virtual aisles and indulge in the
        exquisite taste of premium fruits, delivered right to your doorstep.
      </p>
      <h1 className='mt-10 font-bold text-xl'>Our sellers :</h1>
      <section className='flex justify-around'>
        {Object.values(sellers).map((seller, index) => (
          <article
            key={index}
            className='flex flex-col justify-center items-center'
          >
            <img
              src={seller.avatarSrc}
              alt={`${seller.id} avartar image`}
              className='w-80 rounded-full'
            />
            <p className='font-bold mt-4'>
              {`${seller.id.toUpperCase()}, in ${seller.storeName}`}
            </p>
            <span>{seller.description}</span>
          </article>
        ))}
      </section>
    </div>
  );
}
