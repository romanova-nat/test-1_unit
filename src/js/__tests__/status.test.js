import getPlayerStatus from '../status.js';

describe('getPlayerStatus', () => {
  test('возвращает "healthy", когда здоровье > 50', () => {
    const player = { name: 'Маг', health: 90 };
    expect(getPlayerStatus(player)).toBe('healthy');
  });

  test('возвращает "wounded", когда здоровье = 50', () => {
    const player = { name: 'Воин', health: 50 };
    expect(getPlayerStatus(player)).toBe('wounded');
  });

  test('возвращает "wounded", когда здоровье = 15', () => {
    const player = { name: 'Лучник', health: 15 };
    expect(getPlayerStatus(player)).toBe('wounded');
  });

  test('возвращает "wounded", когда здоровье между 15 и 50', () => {
    const player = { name: 'Маг', health: 30 };
    expect(getPlayerStatus(player)).toBe('wounded');
  });

  test('возвращает "critical", когда здоровье < 15', () => {
    const player = { name: 'Маг', health: 10 };
    expect(getPlayerStatus(player)).toBe('critical');
  });

  test('возвращает "critical", когда здоровье = 0', () => {
    const player = { name: 'Маг', health: 0 };
    expect(getPlayerStatus(player)).toBe('critical');
  });
});
