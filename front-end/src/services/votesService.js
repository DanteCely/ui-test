import votesData from '@data/votes.json';

const { REACT_APP_DELAY } = process.env;

const checkVotes = () => {
  let votes = JSON.parse(localStorage.getItem('votes'));

  if (!votes) {
    localStorage.setItem('votes', JSON.stringify(votesData.data));
    votes = JSON.parse(localStorage.getItem('votes'));
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

const modifyVote = (revert, add, characterId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const votes = checkVotes();
      let doVote;

      const index = votes.findIndex(({ id }) => id === characterId);

      votes[index].voted = true;
      votes[index].lastUpdated = new Date().toISOString();

      if (revert) {
        votes[index].voted = false;
        doVote = -1;
      } else {
        votes[index].voted = true;
        doVote = 1;
      }

      if (add) {
        votes[index].positive += doVote;
      } else {
        votes[index].negative += doVote;
      }

      localStorage.setItem('votes', JSON.stringify(votes));

      resolve(votes);
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

export const setVoteById = async (revert, add, characterId) => {
  const vote = await modifyVote(revert, add, characterId);

  return vote;
};
