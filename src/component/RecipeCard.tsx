import React, { FC, useState } from 'react'
import { Recipe, User } from '../static/index'
import img from '../static/seasonings.jpg'

interface Props {
  recipe: Recipe
}

const RecipeCard: FC<Props> = (props) => {
  return (
    <>
      <div className="card">
        <p className="card__image__outer"><img className="card__image" src={img} alt={props.recipe.name}/></p>

      </div>
      <style jsx>{`
        .card {
          border: solid 1px black;
          display: flex;
        }
        .card__image__outer {
          margin: 5px 5px;
        }
        .card__image {
          height: 200px;
          
        }
      `}</style>
    </>
  )
}

export default RecipeCard