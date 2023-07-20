import Logo_BW from "../assets/LOGO_B&W.png";


function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <img src={Logo_BW} className="footer__content--logo" alt="logo"/>
        <p className="footer__content--copyright">&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer