import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../datas/logements.json"
import AccordeonItem from "./AccordeonItem"
import Slider from './Slider';

function HousePage() {
  
  const {houseId} = useParams();

  const houseData = data.find((item) =>item.id === houseId);

  const firstName = houseData.host.name.split(" ")[0];

  const surName = houseData.host.name.split(" ")[1];

  const rating = houseData.rating

  const greyStarsNumber = 5 - rating

  const ratingArray = [];
  for (let i = 1; i <= rating; i++) {
    ratingArray.push(i);
  }

  const greyStarsArray = [];
  for (let i = 1; i <= greyStarsNumber; i++){
    greyStarsArray.push(i)
  }
  
  const formattedEquipments = houseData.equipments.join("\n");
    
  return (

     houseData && (
    <div>
      <div className="houseContainer">
        <Slider slides={houseData.pictures} />
        <div className="houseContainer__topSection">
          <div className="houseContainer__topSection--leftSide">
              <h2 className="houseContainer__topSection--leftSide--name">{houseData.title}</h2>
          </div>
          <div className="houseContainer__topSection--rightSide">
            <p className="houseContainer__topSection--rightSide--name">
              {firstName}<br />{surName}
            </p>
            <div className="houseContainer__topSection--rightSide--avatar">
              <img 
              className="houseContainer__topSection--rightSide--avatar--photo"
              src={houseData.host.picture}
              alt="avatar de l'hôte"
              />
            </div>
            
          </div>  
        </div>  
        <div className="houseContainer__locationWrapper">
          <p className="houseContainer__locationWrapper--location">{houseData.location}</p>  
        </div>
        <div className="houseContainer__midSection">
          <div className="houseContainer__midSection--leftSide">
            <div className="houseContainer__midSection--leftSide--tags">
              {houseData.tags.map((tag, index) => (
                <span key={index} className= "houseContainer__midSection--leftSide--tags--tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="houseContainer__midSection--rightSide">
            {ratingArray.map((index) => (
              <i key={index} className="fa-solid fa-star houseContainer__midSection--rightSide--redStar">
              </i>
            ))}
            {greyStarsArray.map((index) => (
              <i key={index} className="fa-solid fa-star houseContainer__midSection--rightSide--greyStar">
              </i>
            ))}
            <div className="houseContainer__midSection--rightSide--avatar">
              <p className="houseContainer__midSection--rightSide--avatar--name">
                {firstName}<br />{surName}
              </p>
              <div className="houseContainer__midSection--rightSide--avatar--avatar">
                <img 
                className="houseContainer__midSection--rightSide--avatar--avatar--photo"
                src={houseData.host.picture}
                alt="avatar de l'hôte"
                />
              </div> 
          </div> 
          </div>
        </div>
        <div className="houseContainer__bottomSection">
              <AccordeonItem
              key={`descriptionAccordeon${houseData.id}`}
              title="Description"
              content={houseData.description}
              className="accordeon-item houseContainer__bottomSection--accordeon-item-house description"
            />
            <AccordeonItem
              key={`equipmentsAccordeon${houseData.id}`}
              title="Équipements"
              content={formattedEquipments}
              className="accordeon-item houseContainer__bottomSection--accordeon-item-house equipments"
            />
        </div>
      </div>
    </div>
     )
  )
}

export default HousePage