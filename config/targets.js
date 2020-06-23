'use strict';

const browsers = [
  'last 1 Chrome versions',
  'last 1 Firefox versions',
  'last 1 Safari versions'
];

const isIE11 = process.env.TARGET === 'ie11';

if (isIE11) {
  browsers.push('ie 11');
}

module.exports = {
  browsers
};
