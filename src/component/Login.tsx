import React, {FC, useState, Dispatch, SetStateAction} from 'react';
import { colors, styles } from '../static/styles.json'
import { Link } from 'react-router-dom'
import { Recipe, User } from '../static/index'


interface Props {
  isLogin: boolean,
  changeLogin: Dispatch<SetStateAction<boolean>>,
  user: User,
}

const Login: FC<Props> = (props) => {
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
      <p>ログイン</p>
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
          props.changeLogin(!props.isLogin)
        }} to='/mypage'>ログイン</Link>
      </p>
    </>
  )
}

export default Login