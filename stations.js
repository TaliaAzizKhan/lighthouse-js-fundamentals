const chooseStations = function (stations) {
  let selected_stations = []
  for (const station of stations) {
    if (station[1] >= 20 && (station[2] == 'school' || station[2] == 'community centre')) {
      selected_stations.push(station)
    }
  }
  return selected_stations
}


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));

