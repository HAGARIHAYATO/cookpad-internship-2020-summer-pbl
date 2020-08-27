import React, {FC} from 'react'
import { Recipe } from '../static/index'
import { Link } from 'react-router-dom'
import img from '../static/seasonings.jpg'
import { colors } from '../static/styles.json'

interface Props {
  items: Array<Recipe>
}

const prefix = "/recipes/"

const Carousel: FC<Props> = (props) => {
  return(
    <>
      <h2 className="container__title">投稿レシピ</h2>
      <div className="carousel__container">
        <div className="container__bar">
          {props.items.map((item) => {
            return (
              <Link to={prefix + item.id} >
                <div className="container__card">
                  <img src={img} className="item__image" alt={item.name} />
                  <p className="item__name">{item.name}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <style>{`
        .container__title {
          width: 60%;
          margin: 100px auto 0 auto !important;
        }
        .carousel__container {
          width: 60%;
          margin: 0 auto;
          display: flex;
          overflow-x: scroll;
        }
        .carousel__container::-webkit-scrollbar {
          display: none;
        }
        .container__bar {
          width: ${props.items.length*(260)}px;
          display: flex;
          justify-content: space-around;
          padding: 5% ${window.innerWidth*0.85}px;
          background-color: ${colors.main};
          border-radius: 10px;
        }
        .container__card {
          background-color: grey;
          color: white;
          margin: 0 50px
        }
        .item__image {
          width: 260px;
        }
        .item__name {
          font-weight: bold;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Carousel