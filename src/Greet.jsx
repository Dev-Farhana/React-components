import React from 'react';
import './App.css';

const Greet = ({name,loopy}) => {
    let sentData =[ { name: "Jennie"  , 
    loopy: "&quot; From the River to the Sea <span> Palestine </span> will be <span> Free </span> .&quot;" }
    ]

  return (
    <>
  <h1>
    &quot;I swear by my pretty floral bonnet,I will <span> end </span>  you.&quot;
  </h1>
  
  <h1 className='loopy'>
    &quot; From the River to the Sea <span> Palestine </span> will be <span> Free </span> .&quot;
  </h1>

  <h1>
    {name}
    {loopy}
  </h1>

    </>

  )
}

export default Greet;


