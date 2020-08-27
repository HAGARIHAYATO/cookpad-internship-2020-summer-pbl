import React, {useState} from 'react';
import { users, user, recipes } from './static/data.json'
import { Recipe, User } from './static/index'
import { Router, Route } from 'react-router-dom';
import Login from './component/Login'
import Mypage from './pages/Mypage'
import Header from './component/Header'
import Home from './pages/Home'
import history from './history';
import Recipes from './pages/Recipes';
import RecipeShow from './pages/RecipeShow';
import Footer from './component/Footer';
import Compare from './pages/Compare'

function App() {
  const setRecipe = (match: any) => {
    let recipe: Recipe = {}
    for (const item of recipes) {
      if (item.id === Number(match.params.id)) {
        recipe! = item
      }
    }
    return recipe
  }
  const setUser = (id: number) => {
    let user: User = {}
    for (const item of users) {
      for (const recipe_id of item.post_recipe_ids) {
        if (recipe_id === Number(id)) {
          user = item
        }
      }
    }
    return user
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
          <Route exact path='/' render={ () => <Recipes recipes={recipes} />} />
          <Route exact path='/compare' render={ () => <Compare recipes={recipes} /> }/>
          <Route exact path='/recipes/:id'
            render={({match}) => {
              const recipe = setRecipe(match)
              const user = setUser(recipe.id!)
              return (<RecipeShow recipe={recipe} user={user} match={match}/>)
            }
          }/>
        </Router>
        <Footer />
      </div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .App {
          min-height: 100vh;
          position: relative;
          padding-bottom: 140px;
        }
      `}</style>
    </>
  );
}

export default App;
