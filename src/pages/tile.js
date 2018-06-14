import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function Tile(props)
{
 
     return ( 
     <div class="col-lg-4">
     <div class="skill-img">
         <img class="logo" src={props.skillImage} alt=""/>
     </div>
     <br/>
     <div class = "skill-name">{props.skillName}</div>
     <div class="skill-description">{props.skillDescription}</div>
 </div>
     );
}
export default Tile;

