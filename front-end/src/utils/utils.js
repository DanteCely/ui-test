// Took from https://www.delftstack.com/es/howto/javascript/javascript-round-to-2-decimal-places/
function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
}

export const getVotesPercent = (positiveVotes, negativeVotes) => {
  const totalVotes = positiveVotes + negativeVotes;
  const positivePercent = positiveVotes / totalVotes;
  const negativePercent = negativeVotes / totalVotes;

  return [round(positivePercent), round(negativePercent)];
};
