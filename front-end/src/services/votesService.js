import votesData from '@data/votes.json';

const { REACT_APP_DELAY } = process.env;

const checkVotes = () => {
  let votes = localStorage.getItem('votes');

  if (!votes) {
    localStorage.setItem('votes', JSON.stringify(votesData.data));
    votes = localStorage.getItem('votes');
  }

  return votes;
};

const loadVotes = (voteId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const votes = checkVotes();

      if (voteId) {
        const vote = votes.find(({ id }) => id === voteId);

        resolve(vote);
      }

      resolve(votes);
    }, REACT_APP_DELAY);
  });
};

const modifyVote = (add, characterId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const votes = checkVotes();

      const voteIndex = votes.findIndex(({ id }) => id === characterId);

      votes[voteIndex].voted = true;
      votes[voteIndex].lastUpdated = new Date().toISOString();

      if (add) {
        votes[voteIndex].poitive += 1;
      } else {
        votes[voteIndex].poitive -= 1;
      }

      localStorage.setItem('votes', JSON.stringify(votes));

      resolve(votes[voteIndex]);
    }, REACT_APP_DELAY);
  });
};

export const getVotes = async () => {
  const votes = await loadVotes();

  return votes;
};

export const getVoteById = async (characterId) => {
  const vote = await loadVotes(characterId);

  return vote;
};

export const setVoteById = async (add, characterId) => {
  const vote = await modifyVote(add, characterId);

  return vote;
};
