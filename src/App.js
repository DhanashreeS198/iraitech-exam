import './App.css';
import DynamicComponents from './component/DynamicComponent';
import HomeModule from './component/HomeModule';
import MissingNumber from './component/MissingNumber';
import PhoneBook from './component/PhoneBook';

function App() {
  return (
    <>
    <MissingNumber/>
    <DynamicComponents/>
    <PhoneBook/>
    <HomeModule/>
    
    </>
    
  );
}

export default App;
