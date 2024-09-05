import logo from './logo.svg';  
import './App.css';
import apple from './apple.png';
import pineapple from './pineapple.png';

function App() {
  return (
    <div>
      <div className='container'>
        <div className='image-container'>
          <img className='image' src={apple}/>
        </div>
        <div className='image-container'>
          <img className='image-pineapple' src={pineapple}/>
        </div>
        <div className='image-container'>
          <img className='image' src={apple}/>
        </div>
        
      </div>
      <div className='image-container'>
      <img className='image' src={apple}/>
    </div>
  </div>
  );
}

export default App;
