import React, {FC} from 'react'

interface Props {
  isShowUp: boolean
}

const Loading: FC<Props> = (props) => {
  return (
    <>
      {
        props.isShowUp ?
        <div className="back__layer">
          <div className="loader__wrapper">
            <div className="loader">Loading...</div>
          </div>
        </div>
        :
        <></>
      }
      <style jsx>{`
        .loader__wrapper {
          display: inline-block;
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .back__layer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          height: 100vh;
          background-color: rgba(0,0,0,0.8);
        }
        .loader,
        .loader:after {
          border-radius: 50%;
          width: 10em;
          height: 10em;
        }
        .loader {
          font-size: 10px;
          position: relative;
          text-indent: -9999em;
          border-top: 1.1em solid rgba(255, 255, 255, 0.2);
          border-right: 1.1em solid rgba(255, 255, 255, 0.2);
          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
          border-left: 1.1em solid #ffffff;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation: load8 1.1s infinite linear;
          animation: load8 .7s infinite linear;
        }
        @-webkit-keyframes load8 {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @keyframes load8 {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }        
      `}</style>
    </>
  )
}

export default Loading