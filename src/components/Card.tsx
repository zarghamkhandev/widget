import React from 'react';

interface CardProps {}

const Card: React.FunctionComponent<CardProps> = ({}) => {
  return (
    <div className="flex py-3 px-4 w-full text-lg bg-gray-100 h-16 items-center">
      <div className="w-3/5 text-gray-700 ">Have you tried our new tool?</div>
      <div className="flex ">
        <button className="bg-green-500 mx-1 px-8 py-1 rounded-xl text-gray-200 focus:outline-none focus:bg-green-700">
          Yes
        </button>
        <button className="bg-red-500 mx-1 px-8 py-1 rounded-xl text-gray-200 focus:outline-none focus:bg-red-700">
          No
        </button>
      </div>
    </div>
  );
};

export default Card;
