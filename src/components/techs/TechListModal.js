import React, { useState, useEffect}from 'react';
import TechItem from './TechItem';



const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTechs = async () => {
      setLoading(true);

      const res = await fetch('/techs');
      const data = await res.json();

      setTechs(data);
      setLoading(false);
  };
    // eslint-disable-next-line 
    getTechs(); 
  }, []);



  return (
      <div id="tech-list-modal" className="modal">
          <div className="modal-content">
              <h4>Technician List</h4>
              <ul className="collection">
                {!loading && techs.map(tech => <TechItem tech={tech} key={tech.id}/>)}
              </ul>
          </div>
      </div>
  );
};

export default  TechListModal;