
import React from "react";
import './App.css'


const LostItemCard = ({ item, onClick }) => {



  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Country: {item.Place}</p>
          
          <p>{item.Date}</p>
      
      
    </div>
    
  );
 
};

export default LostItemCard;