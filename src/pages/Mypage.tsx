import React, {FC} from 'react'
import history from '../history';
import CheckCard from '../component/CheckCard'
import Carousel from '../component/Carousel'
import { Props, Recipe } from '../static/index'
import { userInfo } from 'os';

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
        <div className="user_container">
          <h3>{props.user.name}</h3>
          <br/> 
          <p><b>レシピ投稿数</b>: {props.user.post_recipe_ids.length} (件)</p>
          <p><b>貢献ポイント</b>: {props.user.post_recipe_ids.length*5+props.user.favorite_recipe_ids.length*1} (pt)</p>
          <br/>
          <p>貢献ポイントとは</p>
          <br/>
          <p>サービスへの貢献度をポイントとして表したものです。</p>
          <p>(投稿数)x5pt, (お気に入り数)x1pt</p>
        </div>
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
          padding: 5%;
          border: solid 1px black;
        }
        .user_container {
          position: relative;
          border: solid 1px black;
          width: 60%;
          padding: 5%;
          margin: 50px auto;
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