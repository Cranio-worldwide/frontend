/* eslint-disable no-dupe-keys */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '*.{css,scss}': 'stylelint --fix',
  '*.{json,md,html,css}': 'prettier --write',
};
