# @sengokyu/perpetual-calendar

Generate Date object array by month.

# Usage

## TypeScript

```typescript
import { PerpetualCalendar } from '@sengokyu/pepetual-calendar';

// Parameter1 = year
// Parameter2 = month (0-11)
// Parameter3 = generate length
const cal = PerpetualCalendar.generate(2020, 11, 2);
// Result:
// [
//     [ new Date(2020, 11, 1), new Date(2020, 11, 2), new Date(2020, 11, 3), /* (snip...) */ new Date(2020, 11, 31) ],
//     [ new Date(2021, 0, 1), new Date(2021, 0, 2), new Date(2021, 0, 3), /* (snip...) */ new Date(2021, 0, 31) ]
// ]
```


