export const cheakNum = (str) => {
  return str.split("")
    .map(value => { return !isNaN(value); })
    .find(el => el === true)
}