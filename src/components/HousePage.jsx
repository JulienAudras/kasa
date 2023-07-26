import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../datas/logements.json"

function HousePage() {
  
  const {houseId} = useParams();

  const houseData = data.find((item) =>item.id === houseId)

    return (
    <div>
        <img src = {houseData.cover} alt={houseData.title} />

    </div>
  )
}

export default HousePage