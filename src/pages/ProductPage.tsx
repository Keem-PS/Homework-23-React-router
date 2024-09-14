import { useParams, useNavigate } from 'react-router-dom';
import { items, Item } from '../components/data';  // นำเข้า Item จาก data.ts

interface ProductPageProps {
  addToCart: (item: Item) => void;
}

function ProductPage({ addToCart }: ProductPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = items.find((i) => i.id === Number(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(item);
    navigate('/checkout');
  };

  return (
    <div className='container mx-auto'>
      <h1 className='text-center p-10 font-bold text-lg'>Product Page</h1>
      <img className='mb-2' src={item.img} alt={item.productName} width="200" />
      <h1 className='mb-2 font-bold'>{item.productName}</h1>
      <p className='mb-2'>{item.detail}</p>
      <p className='mb-2'>ราคา {item.price} บาท</p>
      <button className=' rounded-lg px-2 bg-green-300 hover:bg-green-200 ' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
