const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let n = parseFloat(sampleActivity, 10);
  if (!sampleActivity || typeof sampleActivity !== 'string' || n >= MODERN_ACTIVITY || n <= 0 || !isFinite(n))
  return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / n) / k);
};
