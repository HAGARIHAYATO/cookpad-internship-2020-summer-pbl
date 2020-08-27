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
  const [searchType, setSearchType] = useState(0)
  const prefix = "/recipes/"
  const checkSearchType = (num: number) => {
    switch (num) {
      case 0:
      return "text";
      case 1:
      return "number"
      default:
      return "text"
    }
  }
  return (
    <>
      <Loading isShowUp={false} />
      <div className="searchForm">
        <select onChange={(e) => {
          setSearchType(Number(e.target.value))
        }} className="select__type">
          <option value={0}>タイトル検索</option>
          <option value={1}>材料数検索</option>
          <option value={2}></option>
        </select>
        {<input className="search" type={checkSearchType(searchType)} />}
        <p className="search__length">{props.recipes.length}/{props.recipes.length}件表示</p>
      </div>
      <p className="recipes">
        {props.recipes.map((recipe) => {
          return <Link to={prefix + recipe.id} ><div className="recipe__card"><RecipeCard recipe={recipe}/></div></Link>
        })}
      </p>
      <style jsx>{`
        .recipes {
          width: 100%;
        }
        .recipe__card {
          margin: 50px auto;
          width: 80%;
          transform: scale(0.8);
        }
        .searchForm {
          width: 64%;
          margin: 30px auto;
        }
        .select__type {
          width: 20%;
          height: 30px;
          padding: 0 1%;
        }
        .search {
          margin: 0 0 0 1%;
          width: 79%;
          padding: 0 1%;
          height: 30px;
        }
        .search__length {
          text-align: right;
          font-size: 12px;
        }
      `}</style>
    </>
  )
}

export default Recipes