import { PerpetualCalendar } from '../src/index';

describe('PerpetualCalendar', () => {
  it('generates a calendar of 2020 begins april', () => {
    // Given
    const year = 2020;
    const month = 3; // April
    const length = 12;

    // When
    const actual = PerpetualCalendar.generate(year, month, length);

    // Then
    expect(actual).toHaveLength(length);
    expect(actual[0]).toHaveLength(30);
    expect(actual[1]).toHaveLength(31);
    expect(actual[2]).toHaveLength(30);
    expect(actual[3]).toHaveLength(31);
    expect(actual[4]).toHaveLength(31);
    expect(actual[5]).toHaveLength(30);
    expect(actual[6]).toHaveLength(31);
    expect(actual[7]).toHaveLength(30);
    expect(actual[8]).toHaveLength(31);
    expect(actual[9]).toHaveLength(31);
    expect(actual[10]).toHaveLength(28);
    expect(actual[11]).toHaveLength(31);
    // Test a part, cause of hard work...
    expect(actual[0][0]).toEqual(new Date(year, 3, 1)); // April
    expect(actual[8][30]).toEqual(new Date(year, 11, 31)); // December
    expect(actual[9][0]).toEqual(new Date(year + 1, 0, 1)); // January, 2021
    expect(actual[11][30]).toEqual(new Date(year + 1, 2, 31)); // March, 2021
  });

  it('generates a calendar of 2023 begins september', () => {
    // Given
    const year = 2023;
    const month = 8; // September
    const length = 18;

    // When
    const actual = PerpetualCalendar.generate(year, month, length);

    // Then
    expect(actual).toHaveLength(length);
    expect(actual[0]).toHaveLength(30); // September, 2023
    expect(actual[1]).toHaveLength(31); // October
    expect(actual[2]).toHaveLength(30); // November
    expect(actual[3]).toHaveLength(31); // December
    expect(actual[4]).toHaveLength(31); // January, 2024
    expect(actual[5]).toHaveLength(29); // Feburary
    expect(actual[6]).toHaveLength(31); // March
    expect(actual[7]).toHaveLength(30); // April
    expect(actual[8]).toHaveLength(31); // May
    expect(actual[9]).toHaveLength(30); // June
    expect(actual[10]).toHaveLength(31); // July
    expect(actual[11]).toHaveLength(31); // August
    expect(actual[12]).toHaveLength(30); // September
    expect(actual[13]).toHaveLength(31); // October
    expect(actual[14]).toHaveLength(30); // November
    expect(actual[15]).toHaveLength(31); // December
    expect(actual[16]).toHaveLength(31); // January, 2025
    expect(actual[17]).toHaveLength(28); // Febrary

    expect(actual[0][0]).toEqual(new Date(year, 8, 1));
    expect(actual[3][30]).toEqual(new Date(year, 11, 31));
    expect(actual[4][0]).toEqual(new Date(year + 1, 0, 1));
    expect(actual[5][28]).toEqual(new Date(year + 1, 1, 29));
    expect(actual[15][30]).toEqual(new Date(year + 1, 11, 31));
    expect(actual[16][0]).toEqual(new Date(year + 2, 0, 1));
    expect(actual[17][27]).toEqual(new Date(year + 2, 1, 28));
  });
});
