import { useParams, useNavigate } from 'react-router-dom';
import { items, Item } from '../../components/data';  // นำเข้า Item จาก data.ts

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
    <div>
      <h1>{item.productName}</h1>
      <img src={item.img} alt={item.productName} width="200" />
      <p>{item.detail}</p>
      <p>Price: ${item.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
