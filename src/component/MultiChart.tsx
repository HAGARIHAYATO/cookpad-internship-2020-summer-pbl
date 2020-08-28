import React, {FC, useEffect} from 'react'
import { Recipe } from '../static/index'
import { colors } from '../static/styles.json'
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

interface Props {
  recipe1: Recipe,
  recipe2: Recipe
}



const MultiChart: FC<Props> = (props) => {
  const names = [
    "sweet", "sour", "salty", "bitter", "oily"
  ]
  let array = []
  for (const i in names) {
    const data = {
      name: names[i],
      A: Object.values(props.recipe1.taste_type!)[i],
      B: Object.values(props.recipe2.taste_type!)[i],
      fullMark: 10
    }
    array.push(data)
  }

  return (
    <RadarChart cx={450} cy={200} outerRadius={150} width={800} height={400} data={array}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar dataKey="A" stroke={colors.blue} fill={colors.blue} fillOpacity={0.6} />
      <Radar dataKey="B" stroke={colors.pink} fill={colors.pink} fillOpacity={0.6} />
    </RadarChart>
  );
}

export default MultiChart