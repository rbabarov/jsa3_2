import getHealthSort from '../src/js/app';

const testArray = getHealthSort([
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]);

testArray.forEach((hero, index) => {
  if (index >= testArray.length - 1) return;
  test(`Hero ${index + 1} health must be greater than hero ${index
    + 2}`, () => {
    expect(hero.health).toBeGreaterThanOrEqual(testArray[index + 1].health);
  });
});
