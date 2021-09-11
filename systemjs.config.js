SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  packages:{
    "/": "js"
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {
      loader: 'css'
    },
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'modules-babel': 'browse/babel-plugin-react-css-modules@5.2.6/dist/index.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17.0.2/umd/react.production.min.js',
    'react-dom': 'react-dom@17.0.2/umd/react-dom.production.min.js',
    'css': 'systemjs-plugin-css@latest/css.js',
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/index.js')
  .catch(console.error.bind(console));