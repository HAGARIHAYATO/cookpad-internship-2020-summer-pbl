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
  const [currentRecipes, setReipces] = useState(props.recipes)
  const prefix = "/recipes/"
  const checkSearchType = (num: number) => {
    switch (num) {
      case 0:
      return "text";
      case 1:
      return "number";
      case 2:
      return "text";
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
          <option value={2}>使用用途検索</option>
        </select>
        <input className="search" type={checkSearchType(searchType)} onChange={(e) => {
          const array = props.recipes.filter((recipe) => {
            switch (searchType) {
              case 1:
              return (Number(e.target.value) === 0 ? true : recipe.materials!.length <= Number(e.target.value));
              case 2:
              return (recipe.usecase!.indexOf(e.target.value) > -1);;
              default:
              return (recipe.name!.indexOf(e.target.value) > -1);
            }
          })
          setReipces(array)
        }} />
        <p className="search__length">{currentRecipes.length}/{props.recipes.length}件表示</p>
      </div>
      <p className="recipes">
        {currentRecipes.map((recipe) => {
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