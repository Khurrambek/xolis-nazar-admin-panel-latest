import React from 'react';
import './_App.scss';
import 'bootstrap/dist/css/bootstrap.css';
// import Login from './components/Login/Login';
import ImageInput from './components/ImageInput/ImageInput';
import AreaInput from './components/AreaInput/AreaInput';
import Adverts from './pages/Adverts/Adverts';
import Latests from './pages/Latests/Latest';
import Daily from './pages/Daily/Daily';
import World from './pages/World/World';
import Opinion from './pages/Opinion/Opinion';
import Tahlil from './pages/Tahlil/Tahlil';
import Portret from './pages/Portret/Portret';
import Sale from './pages/Sale/Sale';
import Newspaper from './pages/Newspaper/Newspaper';
import Subscribe from './pages/Subscribe/Subscribe';


function App() {
  return (
    <div className="container">
      {/* <Login /> */}
      {/* <ImageInput /> */}
      {/* <AreaInput />       */}
      <Adverts />
      <Latests />
      <Daily />
      <World />
      <Opinion />
      <Tahlil />
      <Portret />
      <Sale />
      <Newspaper />
      <Subscribe />
    </div>
  );
}

export default App;
