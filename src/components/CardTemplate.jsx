import React from 'react'

function CardTemplate(props) {
  return (
    <div className = "card">
          <img
              className = "card__img"
              id = {props.id}
              src = {props.cover}
              alt="apperçu du logement"
              />
          
          <p className = "card__title"> {props.title} </p> 
      </div>
  )
}

export default CardTemplate