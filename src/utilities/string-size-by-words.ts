export const stringSizeByWords = (textEntry: string) => {
  const listTextEntry = textEntry.match(/\b\w+\b/g);
  return listTextEntry ? listTextEntry.length : 0;
};
