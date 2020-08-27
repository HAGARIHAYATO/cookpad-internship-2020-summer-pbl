import React, {FC, useState, Dispatch, SetStateAction} from 'react';
import { colors } from '../static/styles.json'
import Logo from '../static/logo_only.png'
import Book from '../static/read.svg'
import Human from '../static/human.svg'
import Search from '../static/search.svg'
import { Link } from 'react-router-dom'
import history from '../history';

interface Props {
  isLogin: boolean,
  changeLogin: Dispatch<SetStateAction<boolean>>
}

const headerParts = {
  lineHeight: "70px",
  padding: "0 20px"
}

const Header: FC<Props> = (props) => {
  const checkLogin = () => {
    if (props.isLogin) {
      return <p style={headerParts} onClick={() => props.changeLogin(!props.isLogin)} className="log__case">logout</p>
    }
    return <p style={headerParts} className="log__case"><Link to="/login">login</Link></p>
  }
  return (
    <>
      <div className="nav">
        <p className="link__box">
          <p className="image__case">
            <img src={Logo} onClick={() => {
              history.push('/')
            }} className="logo__image" />
          </p>
          { props.isLogin ? <p className="image__case">
            <img src={Human} onClick={() => {
              history.push('/mypage')
            }} className="image"/>
          </p> : <></>}
          <p className="image__case">
            <img src={Search} onClick={() => {
              history.push('/compare')
            }} className="image"/>
          </p>
        </p>
        {checkLogin()}
      </div>
      <style jsx>{`
        * {
          text-decoration: none;
          font-weight: bold;
          box-sizing: border-box;
          transition: background-color .2s;
        }
        .link__box {
          display: flex;
          justify-content: space-between;
        }
        .image {
          width: 40px;
          display: block;
          margin: auto 20px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .logo__image {
          width: 60px;
          display: block;
          margin: auto 10px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .log__case:hover {
          cursor: pointer;
          background-color: rgba(0,0,0,0.05);
        }
        .image__case {
          width: 80px;
          cursor: pointer;
          position: relative;
        }
        .image__case:hover {
          background-color: rgba(0,0,0,0.05);
        }
        .nav {
          height: 70px;
          width: 100%;
          color: ${colors.brown} !important;
          background-color: ${colors.main};
          display: flex;
          justify-content: space-between;
        }
        .nav p a {
          color: inherit !important;
          cursor: pointer;
        }
        h1 {
          height: 70px;
          line-height: 70px;
          padding: 0 20px;
        }
      `}</style>
    </>
  )
}

export default Header