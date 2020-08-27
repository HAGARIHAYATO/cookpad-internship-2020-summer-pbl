import React, {FC} from 'react'
import history from '../history';
import CheckCard from '../component/CheckCard'
import Carousel from '../component/Carousel'
import { Props, Recipe } from '../static/index'

const Mypage: FC<Props> = (props) => {
  const getRecipe = (ids: Array<number>): Array<Recipe> => {
    const recipes: Array<Recipe> = props.recipes.filter((recipe) => {
      return ids.some((id) => {
        return recipe.id === id
      })
    })
    return recipes
  }
  return(
    <>
      <div className="body">
        <h2 className="container__title">お気に入りレシピ</h2>
        <div className="fav_container">
          {getRecipe(props.user.favorite_recipe_ids).map((item, index) => {
            return (
              <div key={index}> {<CheckCard recipe={item} isCheck={true} />} </div>
            )
          })}
        </div>
        <button className="btn" onClick={() => {
          history.push('/mypage')
        }}>更新</button>
        <Carousel items={getRecipe(props.user.post_recipe_ids)} />
        <h2 className="container__title">ユーザー情報</h2>
      </div>
      <style jsx>{`
        .body {
          padding: 5% 0;
        }
        .container__title {
          width: 60%;
          margin: 0 auto;
        }
        .fav_container {
          width: 60%;
          margin: 50px auto;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .btn {
          margin: 0 auto;
          display: block;
        }
      `}</style>
    </>
  )
}

export default Mypage