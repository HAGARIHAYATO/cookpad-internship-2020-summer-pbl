import React, {FC, useState} from 'react'
import img from '../static/seasonings.jpg'
import { Link } from 'react-router-dom'
import { Recipe } from '../static/index'
import RecipeShow from '../pages/RecipeShow'

interface Props {
  recipe: Recipe,
  isCheck: boolean
}

const prefix = "/recipes/"

const CheckCard: FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState(props.isCheck)
  return (
    <>
      <Link to={prefix + props.recipe.id} ><p><img className="recipe" src={img} alt="img"/></p></Link>
      <p className="title">{props.recipe.name}</p>
      <input type="checkbox" checked={isChecked} onChange={(e) => {
        setIsChecked(e.target.checked)
        console.log(e.currentTarget.checked)
      }} />
      <style jsx>{`
        .recipe {
          height: 100px;
        }
        .title {
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default CheckCard