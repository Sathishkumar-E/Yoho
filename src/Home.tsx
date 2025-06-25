import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About Us</button>
    </div>
  );
};

export default Home;