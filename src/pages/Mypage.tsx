import React, {FC} from 'react'
import { user, seasonings } from '../static/data.json'

interface Props {

}

const Mypage: FC<Props> = () => {
  return(
    <>
      {user.seasonings.map((obj, index) => {
        return <p key={index}>{obj.name}</p>
      })}
    </>
  )
}

export default Mypage