import { GraphQLClient } from 'graphql-request';

import React from 'react';
import { getSdk, VoteMutationVariables } from '../generated/graphql';

interface CardProps {}

const Card: React.FunctionComponent<CardProps> = ({}) => {
  async function vote(variables: VoteMutationVariables) {
    const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL || '');
    const sdk = getSdk(client);
    const { vote } = await sdk.vote(variables);
    console.log(vote);
  }

  return (
    <div className="flex py-3 px-4 w-full text-lg bg-gray-100 h-16 items-center">
      <div className="w-3/5 text-gray-700 ">Have you tried our new tool?</div>
      <div className="flex ">
        <button
          className="bg-green-500 mx-1 px-8 py-1 rounded-xl text-gray-200 focus:outline-none focus:bg-green-700"
          onClick={() => {
            vote({ value: 'Yes', projectId: '9c92f97db8' });
          }}>
          Yes
        </button>
        <button
          className="bg-red-500 mx-1 px-8 py-1 rounded-xl text-gray-200 focus:outline-none focus:bg-red-700"
          onClick={() => {
            vote({ value: 'No', projectId: '9c92f97db8' });
          }}>
          No
        </button>
      </div>
    </div>
  );
};

export default Card;
