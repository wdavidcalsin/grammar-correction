export const copyText = (outputText: string) => {
  console.log("copyText is run...");
  let tempElement = document.createElement("input");

  tempElement.setAttribute("value", outputText);
  document.body.appendChild(tempElement);
  tempElement.select();

  document.execCommand("copy");
  document.body.removeChild(tempElement);
};
