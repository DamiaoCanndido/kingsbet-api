export const scoreHelper = (
  homePredict: number,
  awayPredict: number,
  homeScore: number,
  awayScore: number,
): number => {
  if (homePredict == homeScore && awayPredict == awayScore) {
    return 25;
  }
  return 0;
};
