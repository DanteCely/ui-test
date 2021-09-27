import { getCharacters, getVotes, setVoteById } from '@services';

export const actionTypes = {
  GET_DATA: 'GET_DATA',
  SET_DATA: 'SET_DATA',
};

export const initState = {
  characters: undefined,
  votes: undefined,
};

export const votesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_DATA': {
      const { dispatch } = payload;

      Promise.all([getCharacters(), getVotes()]).then(([characters, votes]) => {
        dispatch({ type: 'SET_DATA', payload: { characters, votes } });
      });

      return state;
    }

    case 'SET_DATA': {
      return { ...state, ...payload };
    }

    default: {
      throw new Error();
    }
  }
};
