module.exports.checkUniqueName = (uniqueName) => {
  const regex = /[\W+]/g;
  const found = uniqueName.match(regex);
  console.log(found);
  if (found === null || found.length === 0) return true;
  else return false;
};
