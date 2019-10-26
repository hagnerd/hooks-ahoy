const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Hooks Ahoy',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/elvisjg/Documents/Personal/hooks-ahoy/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Hooks Ahoy',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/elvisjg/Documents/Personal/hooks-ahoy',
          templates:
            '/Users/elvisjg/Documents/Personal/hooks-ahoy/node_modules/docz-core/dist/templates',
          docz: '/Users/elvisjg/Documents/Personal/hooks-ahoy/.docz',
          cache: '/Users/elvisjg/Documents/Personal/hooks-ahoy/.docz/.cache',
          app: '/Users/elvisjg/Documents/Personal/hooks-ahoy/.docz/app',
          appPackageJson:
            '/Users/elvisjg/Documents/Personal/hooks-ahoy/package.json',
          gatsbyConfig:
            '/Users/elvisjg/Documents/Personal/hooks-ahoy/gatsby-config.js',
          gatsbyBrowser:
            '/Users/elvisjg/Documents/Personal/hooks-ahoy/gatsby-browser.js',
          gatsbyNode:
            '/Users/elvisjg/Documents/Personal/hooks-ahoy/gatsby-node.js',
          gatsbySSR:
            '/Users/elvisjg/Documents/Personal/hooks-ahoy/gatsby-ssr.js',
          importsJs:
            '/Users/elvisjg/Documents/Personal/hooks-ahoy/.docz/app/imports.js',
          rootJs:
            '/Users/elvisjg/Documents/Personal/hooks-ahoy/.docz/app/root.jsx',
          indexJs:
            '/Users/elvisjg/Documents/Personal/hooks-ahoy/.docz/app/index.jsx',
          indexHtml:
            '/Users/elvisjg/Documents/Personal/hooks-ahoy/.docz/app/index.html',
          db: '/Users/elvisjg/Documents/Personal/hooks-ahoy/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
