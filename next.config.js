/** @type {import('next').NextConfig} */

/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
  'library-caiol.sousa',
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    styledComponents: true
  }
});






