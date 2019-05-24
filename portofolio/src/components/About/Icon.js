import React from "react";


const Icon = ({ cls, name, description }) => {
  return (
    <div>
      <i className={cls} />
      <p>{name}</p>
    </div>
  );
};

export default Icon;
