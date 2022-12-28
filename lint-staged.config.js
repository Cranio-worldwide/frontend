/* eslint-disable no-dupe-keys */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss}': 'stylelint --fix',
  '*.{json,md,html,css}': 'prettier --write',
};
