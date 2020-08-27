import React, {FC} from 'react'
import { colors } from '../static/styles.json'

interface Props {
  step: string,
  index: number
}

const StepCard: FC<Props> = (props) => {
  return(
    <>
      <div className="step__wrapper">
        <p className="number__box">{props.index}</p>
        <p className="step__text">{props.step}</p>
      </div>
      <style jsx>{`
        .step__wrapper {
          margin: 20px 0;
          padding: 50px 60px;
          background-color: ${colors.main};
          border-radius: 5px;
          min-height: 100px;
          position: relative;
          width: 49%;
        }
        .number__box {
          font-size: 30px;
          width: 45px;
          position: absolute;
          top: 5px;
          left: 5px;
          text-align: center;
          border-radius: 5px;
          background-color: white !important;
        }
        .step__text {
          word-break: break-all;
        }
      `}</style>
    </>
  )
}

export default StepCard