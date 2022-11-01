export default function getHealthSort(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
