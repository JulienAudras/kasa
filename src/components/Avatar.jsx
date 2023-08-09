function Avatar(props) {
  return (
    <div className="avatar">
        <p className="avatar__name">
              {props.firstName}<br />{props.surName}
        </p>     
        <img 
        className="avatar__photo"
        src={props.avatarPhoto}
        alt="avatar de l'hôte"
        />
  </div>
  )
}

export default Avatar