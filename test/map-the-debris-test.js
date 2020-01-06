import { describe } from 'riteway';
import { orbitalPeriod } from '../src/intermediate/map-the-debris';

describe('orbitalPeriod()', async assert => {
  assert({
    given: '[{name : "sputnik", avgAlt : 35873.5553}]',
    should: 'return [{name: "sputnik", orbitalPeriod: 86400}]',
    actual: orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]),
    expected: [{ name: 'sputnik', orbitalPeriod: 86400 }]
  });

  assert({
    given:
      '[{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]',
    should:
      'return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]',
    actual: orbitalPeriod([
      { name: 'iss', avgAlt: 413.6 },
      { name: 'hubble', avgAlt: 556.7 },
      { name: 'moon', avgAlt: 378632.553 }
    ]),
    expected: [
      { name: 'iss', orbitalPeriod: 5557 },
      { name: 'hubble', orbitalPeriod: 5734 },
      { name: 'moon', orbitalPeriod: 2377399 }
    ]
  });
});
