import React, {FC, useEffect} from 'react'
import { Recipe } from '../static/index'
import { colors } from '../static/styles.json'
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

interface Props {
  recipe: Recipe,
  height: number,
  width: number
}


const TasteChart: FC<Props> = (props) => {
  let array = []
  for (const ent of Object.entries(props.recipe.taste_type!)) {
    const data = {
      name: ent[0],
      value: ent[1],
      fullMark: 10
    }
    array.push(data)
  }

  return (
    <RadarChart cx={props.width/2.4} cy={props.height/1.3} outerRadius={100} width={props.width} height={props.height*1.5} data={array}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar dataKey="value" stroke={colors.blue} fill={colors.blue} fillOpacity={0.6} />
    </RadarChart>
  );
}

export default TasteChart