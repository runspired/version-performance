import { helper } from '@ember/component/helper';

export function consoleTime([name]/*, hash*/) {
  console.time(name);
  return '';
}

export default helper(consoleTime);
