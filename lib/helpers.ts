export function getRandomNumber(num: number, min: number = 0) {
  let randomNum = Math.ceil(Math.random() * num);
  return randomNum >= min ? randomNum : randomNum + 1;
}
