import { setVoteById } from '@services';

export const actionTypes = {
  SET_VOTE_ID: 'SET_VOTE_ID',
};

export const votesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_VOTE_ID':
      const { add, characterId } = payload;
      const updatedVote = setVoteById(add, characterId);

      const voteIndex = state.findIndex(({ id }) => id === characterId);
      state[voteIndex] = updatedVote;

      return { ...state };
    default:
      throw new Error();
  }
};
