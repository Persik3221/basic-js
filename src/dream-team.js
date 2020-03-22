module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) return false;
  let res = [];
  members.forEach((item)=>{
    if (typeof item == 'string') {
      item = item.replace(/ /g,'');
      res.push(item[0].toUpperCase())
    }
  });
  if (res) {
    res = res.sort().join('');
    return res;
  }
  else false;

};