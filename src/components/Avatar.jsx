function Avatar({firstName, surName, avatarPhoto}) {
  return (
    <div className="avatar">
        <p className="avatar__name">
              {firstName}<br />{surName}
        </p>     
        <img 
        className="avatar__photo"
        src={avatarPhoto}
        alt="avatar de l'hôte"
        />
  </div>
  )
}

export default Avatar