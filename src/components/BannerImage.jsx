function BannerImage(props) {
  return (
    <div className={props.class}>
        <img 
            className= {props.photoClass}
            src={props.bannerPhoto}
            alt="Bannière du site"
        />
        <h1 className="bannerContainer__title">{props.title}</h1>
        </div>
  )
}

export default BannerImage