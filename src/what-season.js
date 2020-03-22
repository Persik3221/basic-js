const seasons_to_month = ['winter','winter','spring','spring','spring','summer','summer','summer','autumn','autumn','autumn','winter'];
module.exports = function getSeason( date ) {
  if (!date) return 'Unable to determine the time of year!';
  if (date.prototype !== new Date().prototype || !date.getUTCDate()) throw new Error();
  return seasons_to_month[date.getMonth()];
};
