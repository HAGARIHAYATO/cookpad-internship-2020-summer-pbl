import React, {useState} from 'react';
import { user, recipes } from './static/data.json'
import { Recipe } from './static/index'
import { Router, Route } from 'react-router-dom';
import Login from './component/Login'
import Mypage from './pages/Mypage'
import Header from './component/Header'
import Home from './pages/Home'
import history from './history';
import Recipes from './pages/Recipes';
import RecipeShow from './pages/RecipeShow';

function App() {
  const setRecipe = (match: any) => {
    let recipe: Recipe = {}
    for (const item of recipes) {
      if (item.id === Number(match.params.id)) {
        recipe = item
      }
    }
    return recipe
  }
  const [isLogin, changeLogin] = useState(true)
  return (
    <>
      <div className="App">
        <Router history={history}>
          <Header isLogin={isLogin} changeLogin={changeLogin}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' render={ () => <Login isLogin={isLogin} changeLogin={changeLogin} user={user} /> }/>
          <Route exact path='/mypage' render={ () => <Mypage isLogin={isLogin} user={user} recipes={recipes} /> }/>
          <Route exact path='/recipes' render={ () => <Recipes />} />
          <Route exact path='/recipes/:id'
            render={({match}) => {
              const recipe = setRecipe(match)
              return (<RecipeShow recipe={recipe} match={match}/>)
            }
          }/>
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
