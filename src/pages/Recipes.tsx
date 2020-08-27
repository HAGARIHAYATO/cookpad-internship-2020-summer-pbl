import React, {FC, useState} from 'react'
import { Recipe, User } from '../static/index'
import { colors } from '../static/styles.json'
import RecipeCard from '../component/RecipeCard'
import { Link } from 'react-router-dom'
import Loading from '../component/Loading'

interface Props {
  recipes: Array<Recipe>
}

const Recipes: FC<Props> = (props) => {
  const prefix = "/recipes/"
  return (
    <>
      <Loading isShowUp={false} />
      <div className="recipes">
        {props.recipes.map((recipe) => {
          return <Link to={prefix + recipe.id} ><div className="recipe__card"><RecipeCard recipe={recipe}/></div></Link>
        })}
      </div>
      <style jsx>{`
        .recipes {
          width: 100%;
        }
        .recipe__card {
          margin: 50px auto;
          width: 80%;
          transform: scale(0.8);
        }
      `}</style>
    </>
  )
}

export default Recipes