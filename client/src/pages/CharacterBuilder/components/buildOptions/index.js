import React, { useState } from 'react';
import NavButtons from './navButtons';
import AbilityScores from './pages/abilityScores';
import Background from './pages/background';
import Class from  './pages/Class';
import Feats from './pages/feats';
import Inventory from './pages/inventory';
import Languages from './pages/languages';
import Proficiencies from './pages/proficiencies';
import Race from './pages/race';

function characterBuilderContainer() {

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
export default characterBuilderContainer;