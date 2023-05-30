import React from 'react';

const Separator = ({title}) => {
  return (
    <div className="flex items-center justify-center">
      <hr className="flex-grow border-gray-300 border-t-2 md:border-l-2 md:border-r-2" />
      <h1 className="mx-4">
        {title}
      </h1>
      <hr className="flex-grow border-gray-300 border-t-2 md:border-l-2 md:border-r-2" />
    </div>
  );
};

export default Separator;