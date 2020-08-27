import React, {FC, useState, Dispatch, SetStateAction, useEffect} from 'react';
import { colors, styles } from '../static/styles.json'
import { Link } from 'react-router-dom'
import { Recipe, User } from '../static/index'
import history from '../history';
import Loading from './Loading'


interface Props {
  isLogin: boolean,
  changeLogin: Dispatch<SetStateAction<boolean>>,
  user: User,
}


const Login: FC<Props> = (props) => {
  const [isLoading, setLoader] = useState(false)
  useEffect(() => {
    if (props.isLogin) {
      history.push("/")
    }
  })
  const [email, changeMail] = useState("")
  const [password, changePass] = useState("")
  const checkValidate = (text: string, isPassword: boolean) => {
    const keyword = isPassword ? props.user.password : props.user.email
    if (text !== keyword) {
      return(
        <>
          <p style={styles.validationError}>正しくありません</p>
        </>
      )
    }
  } 
  return (
    <>
      <Loading isShowUp={isLoading}/>
      <div className="body">
        <h2 className="container__title">ログイン</h2>
        <div className="login__container">
          <p>E-mail</p>
          {checkValidate(email, false)}
          <input onChange={(e) => {
            changeMail(e.target.value)
          }}/>
          <p>Password</p>
          {checkValidate(password, true)}
          <input onChange={(e) => {
            changePass(e.target.value)
          }}/>
          <p>
            <Link onClick={() => {
              setLoader(true)
              setTimeout(() => {
                setLoader(false)
                props.changeLogin(!props.isLogin)
              }, 1000)
            }} to='/mypage' className="button">ログイン</Link>
          </p>
        </div>
      </div>
      <style jsx>{`
        .body {
          padding: 5%;
          color: ${colors.brown}
        }
        .container__title {
          width: 50%;
          margin: 0 auto !important;
        }
        .login__container {
          width: 50%;
          margin: 50px auto;
        }
        .login__container input {
          width: 100%;
          height: 30px;
        }
        .button {
          width: 100%;
          display: block;
          padding: 1% 4%;
          margin: 20px auto;
          background-color: ${colors.blue};
          outline: none;
          border-radius: 5px;
          border: none;
          color: white !important;
          font-weight: bold;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Login