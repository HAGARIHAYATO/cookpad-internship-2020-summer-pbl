import React, {FC, useState, Dispatch, SetStateAction} from 'react';
import { colors } from '../static/styles.json'
import { Link, withRouter } from 'react-router-dom'
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
      return <p style={headerParts} onClick={() => props.changeLogin(!props.isLogin)}>logout</p>
    }
    return <p style={headerParts} ><Link to="/login">login</Link></p>
  }
  return (
    <>
      <div className="nav">
        <h1 onClick={() => {
          history.push('/')
        }}>LOGO</h1>
        {checkLogin()}
      </div>
      <style jsx>{`
        * {
          text-decoration: none;
        }
        .nav {
          height: 70px;
          width: 100%;
          box-shadow: 0 2px 3px ${colors.lightblue};
          color: ${colors.lightblue};
          display: flex;
          justify-content: space-between;
        }
        .nav p {
          cursor: pointer;
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