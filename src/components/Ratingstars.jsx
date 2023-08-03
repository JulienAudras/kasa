
function Ratingstars({rating}) {

  const ratingArray = [];
  for (let i = 1; i <= rating; i++) {
    ratingArray.push(i);
  }

  const greyStarsNumber = 5 - rating;

  const greyStarsArray = [];
  for (let i = 1; i <= greyStarsNumber; i++){
    greyStarsArray.push(i)
  }
  
  return (
    <div className="rating">
      {ratingArray.map((index) => (
              <i key={index} className="fa-solid fa-star rating__redStars">
              </i>
            ))}
            {greyStarsArray.map((index) => (
              <i key={index} className="fa-solid fa-star rating__greyStars">
              </i>
            ))}

    </div>
  )

}

export default Ratingstars