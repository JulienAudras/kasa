import { useParams} from 'react-router-dom'
import data from "../datas/logements.json"
import Collapse from "../components/Collapse"
import Gallery from '../components/Gallery';
import Error from './Error';
import Avatar from '../components/Avatar';
import Ratingstars from '../components/Ratingstars';
import Tags from '../components/Tags';

function House() {
  
  const {houseId} = useParams();
  
  const houseData = data.find((item) =>item.id === houseId);

  if (!houseData) {
    return <Error />
  }
 
  const firstName = houseData.host.name.split(" ")[0];

  const surName = houseData.host.name.split(" ")[1];

  const formattedEquipments = houseData.equipments.join("\n");
   
  return (
    <div className="housePage">
      
      <Gallery slides={houseData.pictures} />
      
      <div className="houseContainer">
          
        <h2 className="houseName">{houseData.title}</h2>
          
        <Avatar
          firstName={firstName}
          surName={surName}
          avatarPhoto={houseData.host.picture}
        />
            
        <p className="houseLocation">{houseData.location}</p>  
        
        <Tags tags={houseData.tags}/>
            
        <Ratingstars rating={houseData.rating} />
          
        <Collapse
          key={`descriptionAccordeon${houseData.id}`}
          title="Description"
          content={houseData.description}
          className="accordeon-item description"
        />
            
        <Collapse
          key={`equipmentsAccordeon${houseData.id}`}
          title="Équipements"
          content={formattedEquipments}
          className="equipments"
        />
        
      </div>
    </div>
    )
}

export default House