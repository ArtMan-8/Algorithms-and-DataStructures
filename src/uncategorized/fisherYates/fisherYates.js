/**
 * Fisher–Yates shuffle
 * @param {Array} originalArray
 * @returns {Array}
 */
export default function fisherYates(originalArray) {
  const shuffleArray = [...originalArray];

  for (let i = shuffleArray.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffleArray[i], shuffleArray[randomIndex]] = [
      shuffleArray[randomIndex],
      shuffleArray[i],
    ];
  }

  return shuffleArray;
}
