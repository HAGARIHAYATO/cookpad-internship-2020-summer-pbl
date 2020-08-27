import React, {FC, useState} from 'react'
import img from '../static/seasonings.jpg'
import { Recipe } from '../static/index'

interface Props {
  recipe: Recipe,
  isCheck: boolean
}

const CheckCard: FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState(props.isCheck)
  return (
    <>
      <p><img className="recipe" src={img} alt="img"/></p>
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