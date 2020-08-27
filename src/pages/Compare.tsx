import React, {FC, useState, useReducer} from 'react'
import { colors } from '../static/styles.json'
import { Recipe } from '../static/index'
import Loading from '../component/Loading'
import { Link } from 'react-router-dom'
import MultiChart from '../component/MultiChart'

interface Props {
  recipes: Array<Recipe>
}

const taste_type = [
  {
    name: "甘さ",
    column: "sweet"
  },
  {
    name: "酸っぱさ",
    column: "sour"
  },
  {
    name: "しょっぱさ",
    column: "salty"
  },
  {
    name: "苦さ",
    column: "bitter"
  },
  {
    name: "油分",
    column: "oily"
  }
]

const prefix = "/recipes/"

const Compare: FC<Props> = (props) => {
  const [selectedRecipeID1, setSelectedRecipeID1] = useState(0)
  const [selectedRecipeID2, setSelectedRecipeID2] = useState(0)
  const [isCompare, setCompare] = useState(false)
  const getRecipeByID = (id: number): Recipe => {
    let recipe = {}
    for (const item of props.recipes){
      if (item.id === id) {
        recipe = item
        return recipe
      }
    }
    return recipe
  }
  return(
    <>
      <Loading isShowUp={false} />
      <div className="compare__container">
        <div className="search__container">
          <select onChange={(e) => {
            setSelectedRecipeID1(Number(e.target.value))
            console.log(selectedRecipeID1)
          }} className="main__selector">
            {selectedRecipeID1 && selectedRecipeID2 ? <></> :<option value={0}>レシピ1を選択</option>}
            {props.recipes.map((recipe) => {
              return recipe.id !== selectedRecipeID2 ? <option key={recipe.id} value={recipe.id}>{recipe.name}</option> : <></>
            })}
          </select>
          <select onChange={(e) => {
            setSelectedRecipeID2(Number(e.target.value))
            console.log(selectedRecipeID2)
          }} className="main__selector">
            {selectedRecipeID1 && selectedRecipeID2 ? <></> :<option value={0}>レシピ2を選択</option>}
            {props.recipes.map((recipe) => {
              return recipe.id !== selectedRecipeID1 ? <option key={recipe.id} value={recipe.id}>{recipe.name}</option> : <></>
            })}
          </select>
          {
            selectedRecipeID1 ?
            <Link to={prefix + selectedRecipeID1}>
              <div className="selected__recipe select1">
                <h3 className="selected__title">{getRecipeByID(selectedRecipeID1).name}</h3>
              </div>
            </Link>
            :
            <></>
          }
          {
            selectedRecipeID2 ?
            <Link to={prefix + selectedRecipeID2}>
              <div className="selected__recipe select2">
                <h3 className="selected__title">{getRecipeByID(selectedRecipeID2).name}</h3>
              </div>
            </Link>
            :
            <></>
          }
          <button disabled={!Boolean(selectedRecipeID1 && selectedRecipeID2)} className="button" onClick={() => {
            setCompare(!isCompare)
          }}>{!isCompare ? "比較" : "比較解除"}</button>
        </div>
        <div className="result__container">
        {
          selectedRecipeID1 ?
          <div className="selected__recipe select1">
            <h3 className="selected__title">{getRecipeByID(selectedRecipeID1).name}</h3>
          </div>
          :
          <></>
        }
        {
          selectedRecipeID2 ?
          <div className="selected__recipe select2">
            <h3 className="selected__title">{getRecipeByID(selectedRecipeID2).name}</h3>
          </div>
          :
          <></>
        }
        {
          isCompare ?
          <>
            <MultiChart recipe1={getRecipeByID(selectedRecipeID1)} recipe2={getRecipeByID(selectedRecipeID2)} />
          </>
          :<></>
        }
        </div>
      </div>
      <style jsx>{`
        * {
          color: ${colors.brown};
        }
        .compare__container {
          display: flex;
          justify-content: space-around;
          width: 100%;
          padding: 3%;
        }
        .search__container {
          background-color: ${colors.main};
          width: 29%;
          border-radius: 10px;
          padding: 15px;
        }
        .result__container {
          background-color: ${colors.main};
          width: 69%;
          border-radius: 10px;
          padding: 15px;
        }
        .main__selector {
          height: 30px;
          width: 100%;
          display: block;
          margin: 0 0 10px 0;
        }
        .selected__recipe {
          margin: 20px auto;
        }
        .selected__title {
          margin: 10px auto;
          text-align: center;
        }
        .select1 {
          border: solid 2px ${colors.blue};
          border-radius: 10px;
        }
        .select2 {
          border: solid 2px ${colors.pink};
          border-radius: 10px;
        }
        .button {
          outline: none;
          padding: 1% 3%;
          border-radius: 10px;
          background-color: ${colors.brown};
          width: 100%;
          text-align: center;
          color: white;
          border: none;
          font-size: 20px;
        }
        .button:hover {
          color: lightgrey;
        }
      `}</style>
    </>
  )
}

export default Compare