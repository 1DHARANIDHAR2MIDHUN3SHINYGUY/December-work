// import logo from './logo.svg';
import './App.css';
import ImageTogg from './component/ImageTogg';

const App = () => {
  const image1Url = 'https://i.pinimg.com/originals/b8/0c/d1/b80cd1ca58f0233958c4e588d7ee11cb.gif';
  // const image1Url = 'https://i.pinimg.com/originals/f4/49/db/f449db79a0ac9659116c104f60e0ebac.gif';
  // const image2Url = 'https://www.gifcen.com/wp-content/uploads/2021/07/troll-face-gif-2.gif';
  const image2Url = 'https://i.pinimg.com/originals/bd/af/e2/bdafe2fbf032afab84fd3ad339fe29cb.gif';

  return (
    <div className='first'>
      <p>Image Toggle App</p>
      <ImageTogg image1={image1Url} image2={image2Url} />
      <p>Click Me☝️</p>
    </div>
  );
};
export default App;

