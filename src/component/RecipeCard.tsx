import React, { FC, useRef, useEffect, useState } from 'react'
import { Recipe, User } from '../static/index'
import img from '../static/seasonings.jpg'
import { colors } from '../static/styles.json'
import TasteChart from './TasteChart'

interface Props {
  recipe: Recipe,
  user?: User
}

const RecipeCard: FC<Props> = (props) => {
  const stageSize = useRef({} as HTMLDivElement)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (stageSize.current) {
      setHeight(stageSize.current.offsetHeight)
      setWidth(stageSize.current.offsetWidth)
    }
  }, [stageSize])
  return (
    <>
      <div className="card">
        <p className="card__image__outer"><img className="card__image" src={img} alt={props.recipe.name}/></p>
        <div className="card__container">
          <h2 className="card__title">{props.recipe.name}</h2>
          {props.user ? <p className="card__user">By {props.user.name!}</p> : <></>}
          <div className="card__main">
            <div className="card__main__left">
              <h4>使用用途</h4>
              <p className="text__area">
                {props.recipe.usecase ? props.recipe.usecase : "まだ用途が記されていません。"}
              </p>
              <h4>材料数(種類) : {props.recipe.materials!.length}</h4>
            </div>
            <div className="card__main__right" ref={stageSize}>
              <h4>味分布</h4>
              <div className="taste__chart">
                <TasteChart recipe={props.recipe} height={height} width={width} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        * {
          color: ${colors.brown}
        }
        .card {
          display: flex;
          background-color: ${colors.main};
          border-radius: 5px;
        }
        .card__title {
          text-align: center;
        }
        .card__user {
          text-align: right;
          padding: 5px 10px;
          font-size: 14px;
          font-weight: lighter; 
        }
        .card__image__outer {
          padding: 5px;
        }
        .card__image {
          height: 240px;
        }
        .card__container {
          padding: 10px 0;
          width: 80%;
        }
        .card__main {
          width: 100%;
          padding:  10px 10px 0 10px;
          display: flex;
          justify-content: space-between;
        }
        .card__main__left {
          width: 48%;
        }
        .card__main__right {
          width: 48%;
        }
        .taste__chart {
          border: solid 1px ${colors.brown};
          min-height: 200px;
          background-color: white;
          border-radius: 10px;
          padding: 10px;
        }
        .text__area {
          border: solid 1px ${colors.brown};
          min-height: 100px;
          font-size: 12px;
          font-weight: lighter;
          padding: 3%;
          background-color: white;
          word-break: break-all;
          margin: 20px 0;
          border-radius: 10px;
        }
      `}</style>
    </>
  )
}

export default RecipeCard