import React, { useState } from "react";

const Card = ({ korean, imgSource }) => {
  const [status, setStatus] = useState(false);

  return (
    <div className="card" onClick={() => setStatus(!status)}>
      {status ? <img src={imgSource} /> : <h4>{korean}</h4>}
    </div>
  );
};

export default Card;
