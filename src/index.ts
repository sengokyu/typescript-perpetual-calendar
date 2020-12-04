// Days of each months
const DAYS_OF_NORMAL = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_OF_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// When divide by 100 -> divide by 400
// Other else -> divide by 4
const isLeapYear = (year: number): boolean =>
  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

export class PerpetualCalendar {
  /**
   * Generate array of Date object.
   *
   * @param startYear Year
   * @param startMonth Month
   * @param length Length of months
   */
  public static generate(
    startYear: number,
    startMonth: number,
    length: number
  ): Array<Array<Date>> {
    const result: Array<Array<Date>> = [];
    const ulimit = startMonth + length;

    for (let month = startMonth; month < ulimit; month++) {
      const firstDay = new Date(startYear, month, 1);
      const days = isLeapYear(firstDay.getFullYear())
        ? DAYS_OF_LEAP
        : DAYS_OF_NORMAL;

      const datesOfMonth = [...Array(days[firstDay.getMonth()]).keys()].map(
        (d) => new Date(startYear, month, d + 1)
      );

      result.push(datesOfMonth);
    }

    return result;
  }
}
