import React from 'react';

const Separator = ({title , style}) => {
  return (
    <div className="flex items-center justify-center">
      <hr className="flex-grow border-gray-500 border-t-2 md:border-l-2 md:border-r-2" />
      <h1 className="mx-4 font-bold" style={style}>
        {title}
      </h1>
      <hr className="flex-grow border-gray-500 border-t-2 md:border-l-2 md:border-r-2" />
    </div>
  );
};

export default Separator;