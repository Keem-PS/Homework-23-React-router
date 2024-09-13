import { Link } from 'react-router-dom';
import { items } from '../../components/data';  // items array from above

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.productName} width="100" />
            <h3>{item.productName}</h3>
            <p>Price: ${item.price}</p>
            <Link to={`/product/${item.id}`}>
              <button>View Item</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;