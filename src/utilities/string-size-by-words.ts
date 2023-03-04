export const stringSizeByWords = (textEntry: string) => {
  console.log("stringSizeByWords id run...");
  const listTextEntry = textEntry.match(/\b\w+\b/g);
  return listTextEntry ? listTextEntry.length : 0;
};
