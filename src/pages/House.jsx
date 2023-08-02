import React from 'react'
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

   
    // <div>
    //   <div className="houseContainer">
    //     <Gallery slides={houseData.pictures} />
    //     <div className="houseContainer__topSection">
    //       <div className="houseContainer__topSection--leftSide">
    //           <h2 className="houseContainer__topSection--leftSide--name">{houseData.title}</h2>
    //       </div>
    //       <div className="houseContainer__topSection--rightSide">
    //         <Avatar
    //         firstName={firstName}
    //         surName={surName}
    //         avatarPhoto={houseData.host.picture}
    //         />
            
    //       </div>  
    //     </div>  
    //     <div className="houseContainer__locationWrapper">
    //       <p className="houseContainer__locationWrapper--location">{houseData.location}</p>  
    //     </div>
    //     <div className="houseContainer__midSection">
    //       <div className="houseContainer__midSection--leftSide">
    //         <div className="houseContainer__midSection--leftSide--tags">
    //           <Tags tags={houseData.tags}/>
    //         </div>
    //       </div>
    //       <div className="houseContainer__midSection--rightSide">
    //         <Ratingstars rating={houseData.rating} />
    //       </div>
    //     </div>
    //     <div className="houseContainer__bottomSection">
    //           <Collapse
    //           key={`descriptionAccordeon${houseData.id}`}
    //           title="Description"
    //           content={houseData.description}
    //           className="accordeon-item houseContainer__bottomSection--accordeon-item-house description"
    //         />
    //         <Collapse
    //           key={`equipmentsAccordeon${houseData.id}`}
    //           title="Équipements"
    //           content={formattedEquipments}
    //           className="accordeon-item houseContainer__bottomSection--accordeon-item-house equipments"
    //         />
    //     </div>
    //   </div>
    // </div>

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