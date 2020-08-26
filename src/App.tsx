import React, {useState} from 'react';
import { recipes, user } from './static/data.json'
import { Router, Route } from 'react-router-dom';
import Login from './component/Login'
import Mypage from './pages/Mypage'
import Header from './component/Header'
import Home from './pages/Home'
import history from './history';

function App() {
  const [isLogin, changeLogin] = useState(false)
  return (
    <>
      <div className="App">
        <Router history={history}>
          <Header isLogin={isLogin} changeLogin={changeLogin}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' render={ () => <Login isLogin={isLogin} changeLogin={changeLogin}/> }/>
          <Route exact path='/mypage' render={ () => <Mypage /> }/>
        </Router>
      </div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default App;
