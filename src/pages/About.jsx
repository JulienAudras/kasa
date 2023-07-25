import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AccordeonItem from "../components/AccordeonItem.jsx";
import MountainPhoto from "../assets/Mountain.jpeg";

const aboutDatas=
[
  {
    title:"Fiabilité",
    content:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    title:"Respect",
    content:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title:"Service",
    content:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title:"Sécurité",
    content:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
]


function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="about-photo">
          <img 
            className="about-photo__image"
            src={MountainPhoto}
            alt="paysage montagneu"
            />
        </div>
        <div className="accordeons-container">
        {aboutDatas.map((item, index) => (
          <AccordeonItem
            key={index}
            title={item.title}
            content={item.content}
            className={`accordeon-item-about about-${index+1}`}
          />
        ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About