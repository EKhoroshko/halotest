export const filterMin = (arr) => {
  const a = arr.map(el => el)
    .sort((a, b) => a.price - b.price);
  return a[0]
};