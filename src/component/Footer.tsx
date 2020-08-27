import React, {FC} from 'react'
import { colors } from '../static/styles.json'
import Logo from '../static/main_logo.jpeg'

const imgSize = {
  height: "140px"
}

const Footer: FC = () => {
  return (
    <>
      <div className="footer__container">
        <img style={imgSize} src={Logo} alt="logo"/>
        <p className="allow" onClick={() => {
          window.scroll({
            top: 0,
            behavior: 'smooth'
          })
        }}>↑</p>
      </div>
      <style jsx>{`
        .footer__container {
          height: 140px;
          width: 100%;
          background-color: ${colors.main};
          color: ${colors.main};
          margin-bottom: 0;
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: space-between;
        }
        .allow {
          font-size: 80px;
          line-height: 140px;
          color: ${colors.blue};
        }
        .allow:hover {
          background-color: rgba(0,0,0,0.05);
        }
      `}</style>
    </>
  )
}

export default Footer