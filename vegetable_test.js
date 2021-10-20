const judgeVegetable = function (vegetables, metric) {
  let max = vegetables[0][metric];
  let max_id = 0;
  for (let i = 0; i < vegetables.length; i++){
    if (vegetables[i][metric] > max) {
      max = vegetables[i][metric];
      max_id = i;
    } 
  }
  return vegetables[max_id]['submitter'];
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))




