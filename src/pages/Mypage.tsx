import React, {FC, useEffect} from 'react'
import history from '../history';
import CheckCard from '../component/CheckCard'
import Carousel from '../component/Carousel'
import { Props, Recipe } from '../static/index'
import { colors } from '../static/styles.json'

const Mypage: FC<Props> = (props) => {
  useEffect(() => {
    if (!props.isLogin) {
      history.push('/login')
    }
  })
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
          {getRecipe(props.user.favorite_recipe_ids!).map((item, index) => {
            return (
              <div key={index}> {<CheckCard recipe={item} isCheck={true} />} </div>
            )
          })}
        </div>
        <button className="btn" onClick={() => {
          history.push('/mypage')
        }}>更新</button>
        <Carousel items={getRecipe(props.user.post_recipe_ids!)} />
        <h2 className="container__title">ユーザー情報</h2>
        <div className="user_container">
          <h3>{props.user.name}</h3>
          <br/>
          <p><b>レシピ投稿数</b>: {props.user.post_recipe_ids!.length} (件)</p>
          <p><b>貢献ポイント</b>: {props.user.post_recipe_ids!.length*5+props.user.favorite_recipe_ids!.length*1} (pt)</p>
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
          color: ${colors.brown};
        }
        .container__title {
          width: 60%;
          margin: 0 auto !important;
        }
        .fav_container {
          width: 60%;
          margin: 50px auto 0 auto;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 5%;
          background-color: ${colors.main};
          border-radius: 10px;
        }
        .user_container {
          position: relative;
          background-color: ${colors.main};
          border-radius: 10px;
          width: 60%;
          padding: 5%;
          margin: 50px auto;
        }
        .btn {
          margin: 20px auto;
          display: block;
          padding: .5% 4%;
          border-radius: 5px;
          background-color: ${colors.blue};
          border: none;
          color: white;
        }
      `}</style>
    </>
  )
}

export default Mypage