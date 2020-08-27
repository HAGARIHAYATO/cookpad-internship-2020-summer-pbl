import React, {FC} from 'react'
import { Recipe } from '../static/index'
import RecipeCard from '../component/RecipeCard'

interface Props {
  recipe: Recipe,
  match: {
    params: {
      id: string
    }
  }
}

const RecipeShow: FC<Props> = (props) => {
  let params_id = Number(props.match.params.id)
  return (
    <>
      <div className="wrapper">
        <RecipeCard
          recipe={props.recipe}
        />
        <div className="material__container">

        </div>
      </div>
      <style jsx>{`
        .wrapper {
          padding: 5%;
        }
        .material__container {

        }
      `}</style>
    </>
  )
}

export default RecipeShow