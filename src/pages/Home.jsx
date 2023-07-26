import { Link } from "react-router-dom"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import BannerImage from "../components/BannerImage.jsx"
import Coast from "../assets/Coast.jpeg"
import CardTemplate from "../components/CardTemplate.jsx"
import data from "../datas/logements.json"


function Home() {

  console.log(data)
  return <div>
    <Header />
    <div className = "mainContainer">
      <BannerImage bannerPhoto = {Coast} title = "Chez vous, partout et ailleurs"/> 
      
      <div className = "cardsContainer">
        {data.map((item, index) => (
          <Link to={`/house/${item.id}`} key={item.id}>
            <CardTemplate
              key={index}
              id={item.id}
              title={item.title}
              cover={item.cover}
            />
          </Link>
        ))}
      </div>
    </div>
    <Footer />
  </div>
}

export default Home;
