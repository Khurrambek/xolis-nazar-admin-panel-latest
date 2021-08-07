import React from 'react';
import './_App.scss';
import 'bootstrap/dist/css/bootstrap.css';
// import Login from './components/Login/Login';
import ImageInput from './components/ImageInput/ImageInput';
import AreaInput from './components/AreaInput/AreaInput';
import Adverts from './pages/Adverts/Adverts';
import Latests from './pages/Latests/Latest';


function App() {
  return (
    <div className="container">
      {/* <Login /> */}
      {/* <ImageInput /> */}
      {/* <AreaInput />       */}
      {/* <Adverts /> */}
      <Latests />
    </div>
  );
}

export default App;
