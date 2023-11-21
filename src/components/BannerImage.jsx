function BannerImage(props) {
  return (
    <div className={props.class}>
        <img 
            className={props.photoClass}
            src={props.bannerPhoto}
            alt={props.title || "Bannière du site"} 
            
        />
        {props.title && <h1 className="bannerContainer__title">{props.title}</h1>}   
        </div>
  )
}

export default BannerImage