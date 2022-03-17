import React, { UseState } from 'react';
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
  
  const [currentPage, setCurrentPage] = UseState('Race');

  const renderPage = () => {
    if (currentPage === 'Race') {
      return <Race />;
    }
    if (currentPage === 'Class') {
      return <Class />;
    }
    if (currentPage === 'Abilitiy Scores') {
      return <AbilityScores />;
    }
    if (currentPage === 'Background') {
      return <Background />;
    }
    if (currentPage === 'Languages') {
      return <Languages />;
    }
    if (currentPage === 'Proficiencies') {
      return <Proficiencies />;
    }
    if (currentPage === 'Feats') {
        return <Feats />;
    }
    if (currentPage === 'Inventory') {
        return <Inventory />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavButtons currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  )};

  export default characterBuilderContainer;