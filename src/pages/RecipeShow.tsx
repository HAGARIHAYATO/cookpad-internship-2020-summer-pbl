import React, {FC} from 'react'
import { Recipe, User } from '../static/index'
import RecipeCard from '../component/RecipeCard'
import { colors } from '../static/styles.json'
import StepCard from '../component/StepCard'

interface Props {
  recipe: Recipe,
  user: User,
  match: {
    params: {
      id: string
    }
  }
}

const steps = [
  "材料を揃える",
  "材料を混ぜ合わせる"
]

const RecipeShow: FC<Props> = (props) => {
  let params_id = Number(props.match.params.id)
  return (
    <>
      <div className="wrapper">
        <RecipeCard
          recipe={props.recipe}
          user={props.user}
        />
        <div className="material__container">
          <h2>材料一覧</h2>
          <table>
            <tr>
              <th>材料名</th>
              <th>量</th>
            </tr>
            {props.recipe.materials!.map((material) => {
              return (<tr><td>{material.name}</td><td>{material.quantity}</td></tr>)
            })}
          </table>
        </div>
        <h2>手順</h2>
        <div className="step__container">
          {steps.map((step, index) => {
            return <StepCard step={step} index={index} />
          })}
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          padding: 5%;
        }
        .material__container {
          margin: 50px 0;
          display: inline-block;
          padding: 1% 2% 2% 2%;
          background-color: ${colors.main};
          border-radius: 5px;
        }
        tr {
          background-color: white;
        }
        td, th {
          border-radius: 10px;
          padding: 2px 10px;
          min-width: 300px;
          text-align: center;
        }
        .step__container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default RecipeShow