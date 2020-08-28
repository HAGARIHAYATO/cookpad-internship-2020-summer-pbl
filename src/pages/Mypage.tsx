import React, {FC, useEffect} from 'react'
import history from '../history';
import Carousel from '../component/Carousel'
import { Props, Recipe } from '../static/index'
import { colors } from '../static/styles.json'
import img from '../static/no_image.jpg'

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
        <div className="image__wrapper">
          <div className="background">
            <img className="imgSize" src={img}/>
          </div>
        </div>
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
          margin: 20px auto 0 auto !important;
        }
        .image__wrapper {
          width: 60%;
          margin: 0 auto;
          position: relative;
          min-height: 300px;
        }
        .imgSize {
          width: 200px;
          height: 200px;
          border-radius: 50%;
        }
        .background {
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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
          margin: 0 auto 50px auto;
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