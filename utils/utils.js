module.exports.checkUniqueName = (uniqueName) => {
  // regex to only accept "., "-" and " "

  const regex = /[^\w .-]|_/g;
  const found = uniqueName.match(regex);
  console.log(found);
  if (found === null || found.length === 0) return true;
  else return false;
};
