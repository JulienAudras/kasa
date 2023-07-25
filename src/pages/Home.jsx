import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx";
import BannerImage from "../components/BannerImage.jsx";
import Coast from "../assets/Coast.jpeg"

function Home() {
  return <div>
    <Header />
    <div className = "home-container">
      <BannerImage bannerPhoto = {Coast} title = "Chez vous, partout et ailleurs"/>
    </div>
    <Footer />
  </div>;
}

export default Home;
