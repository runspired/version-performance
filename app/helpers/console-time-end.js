import { helper } from '@ember/component/helper';

export function consoleTimeEnd([name]/*, hash*/) {
  console.timeEnd(name);
  return '';
}

export default helper(consoleTimeEnd);
