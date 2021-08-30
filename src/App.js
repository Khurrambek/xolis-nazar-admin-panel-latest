import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Sections from './pages/Sections/Sections';
import Adverts from './pages/Adverts/Adverts';
import Accounts from './pages/Accounts/Accounts';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Navigation from './components/Navigation/Navigation';
import NavbarTop from './components/NavbarTop/NavbarTop';
import AddCategory from './pages/AddCategory/AddCategory';
import AddSection from './pages/AddSection/AddSection';
import {
  Route,
  Switch
} from 'react-router-dom';
import CreateAdverts from './pages/Adverts/CreateAdverts/CreateAdverts';




function App() {
  
  return (
    <div className="app">
      <div className = "row row-bg-main">
        <aside className ="col-md-2 navigation-wrapper">
          <Navigation />
        </aside>
        <main className="col-md-10">
          <nav className="navbar-section">
            <NavbarTop />
          </nav>
          <Switch>
            <Route path = "/" exact component = {Dashboard}/>
            <Route path="/sections" component = {Sections} />
            <Route path="/adverts" component={Adverts} />
            <Route path="/addcategory" component={AddCategory} />
            <Route path="/accounts" component = {Accounts} />
            <Route path="/addadvert" component={CreateAdverts} />
            <Route path="/addsection" component={AddSection} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
        </main>
      </div>
      
    </div>
  );
}

export default App;
