import { Link } from 'react-router-dom';
import { items } from '../components/data';  // items array from above

function HomePage() {
  return (
    <div>
      <h1 className='text-center p-10 font-bold text-lg'>Home Page</h1>
      <div className='container mx-auto flex flex-row justify-center gap-8'>
        {items.map((item) => (
          <div key={item.id} className=' size-48'>
            <img className='border solid mb-2 w-40 h-48' src={item.img} alt={item.productName} />
            <h3 className='font-bold truncate ...'>{item.productName}</h3>
            <p className='mb-2'>ราคา {item.price} บาท</p>
            <Link to={`/product/${item.id}`}>
              <button className=' rounded-lg px-2 bg-green-300 hover:bg-green-200 '>View Item</button>
            </Link>
            </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;