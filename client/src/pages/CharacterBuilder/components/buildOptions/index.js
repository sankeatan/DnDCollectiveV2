import React, { useState } from 'react';
import NavButtons from './navButtons';
import AbilityScores from './renders/AbilityScores';
import Background from './renders/Background';
import Class from  './renders/Class';
import Feats from './renders/Feats';
import Inventory from './renders/inventory';
import Languages from './renders/languages';
import Proficiencies from './renders/proficiencies';
import Race from './renders/race';



export default function CharacterBuilderContainer() {
  
  const [ navSelection, setNavSelection ] = useState('Race');

  const navUpdate = (page) => {
    setNavSelection(page)
  }

  const renderOption = () => {
    if (navSelection === 'Race') {
      return <Race />;
    }
    if (navSelection === 'Class') {
      return <Class />;
    }
    if (navSelection === 'Abilitiy Scores') {
      return <AbilityScores />;
    }
    if (navSelection === 'Background') {
      return <Background />;
    }
    if (navSelection === 'Languages') {
      return <Languages />;
    }
    if (navSelection === 'Proficiencies') {
      return <Proficiencies />;
    }
    if (navSelection === 'Feats') {
        return <Feats />;
    }
    if (navSelection === 'Inventory') {
        return <Inventory />;
    }

  return (
    <div>
      <NavButtons navSelection={navSelection} setNavSelection={navUpdate} />
      {renderOption()}
    </div>
  )};
}