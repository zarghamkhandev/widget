import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import { initialNames } from '../utils/initialArray';
export default function Home() {
  const [namesList, setNamesList] = useState<string[]>(initialNames);
  const [searchInput, setSearchInput] = useState<string>('');
  const filteredList = namesList.filter((name) =>
    name.toLowerCase().includes(searchInput.toLowerCase())
  );
  const addNewItem = () => {
    const randomName: string = uniqueNamesGenerator({
      dictionaries: [names, names],
      separator: ' ',
      style: 'capital',
    });
    setNamesList((prevState) => {
      return [...prevState, randomName];
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="w-72 rounded-md border border-gray-500 shadow-xl flex flex-col overflow-hidden ">
        <div className="w-full flex border-b border-gray-500 bg-gray-400">
          <div className="w-4/5 p-2">
            <input
              className="rounded pl-2 py-1 border border-gray-500"
              placeholder="Search"
              value={searchInput}
              onChange={async (event) => {
                setSearchInput(event.target.value);
              }}
            />
          </div>
          <div className="w-1/5 flex border-l border-gray-500 items-center justify-center ">
            <IoAddOutline
              className="w-8 h-8 text-white hover:text-gray-200 cursor-pointer"
              onClick={addNewItem}
            />
          </div>
        </div>
        <div className="h-96 bg-gray-200 overflow-y-auto">
          <ul className="w-full">
            {filteredList.map((name, index) => (
              <li
                className="pt-1 mt-1 mx-2 pl-2 border-b border-gray-400 "
                key={index}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
