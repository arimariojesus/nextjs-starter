module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    'inline-react-svg',
    ['babel-plugin-root-import', { paths: [{ rootPathSuffix: 'src', rootPathPrefix: '@/' }] }],
  ],
};
