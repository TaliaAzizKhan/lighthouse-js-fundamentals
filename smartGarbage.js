const smartGarbage = function (trash, bins){
  if (trash === 'recycling'){
    bins.recycling++;
  } else if (trash === 'waste'){
    bins.waste++;
  } else if (trash === 'compost'){
    bins.composot++;
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
