// Took from https://www.delftstack.com/es/howto/javascript/javascript-round-to-2-decimal-places/
function round(num) {
  const m = Number((Math.abs(num) * 100).toPrecision(15));

  return (Math.round(m) / 100) * Math.sign(num);
}

export const getVotesPercent = (positiveVotes, negativeVotes) => {
  const totalVotes = positiveVotes + negativeVotes;
  const positivePercent = (positiveVotes / totalVotes) * 100;
  const negativePercent = (negativeVotes / totalVotes) * 100;

  return [round(positivePercent), round(negativePercent)];
};

export const convertToCharPercent = (numberPercent) => {
  return `${numberPercent}%`;
};

export const greaterThan = (positive, negative) => {
  return positive >= negative;
};
