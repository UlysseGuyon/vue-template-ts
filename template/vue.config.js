const path = require('path');

{{#makeProxy}}
const apiDomainSuffix = process.env.VUE_APP_DEV_DOMAIN_SUFFIX;

const devProxy =
  process.env.NODE_ENV && process.env.NODE_ENV.includes('dev') && process.env.VUE_APP_USE_PROXY
    ? {
      [`${apiDomainSuffix}`]: {
        target: `${
          process.env.VUE_APP_API_PROTOCOL
        }://${
          process.env.VUE_APP_API_DOMAIN
        }:${
          process.env.VUE_APP_API_PORT
        }`,
        changeOrigin: true,
        pathRewrite: { [`^${apiDomainSuffix}`]: '' },
        logLevel: 'debug'
      }
    }
    : undefined;
{{/makeProxy}}

module.exports = {
  outputDir: path.resolve(__dirname, './dist'),
  devServer: {
    port: 8080{{#makeProxy}},
    proxy: devProxy
    {{/makeProxy}}
  },
  pages: {
    main: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: '{{ title }}'
    }
  }
};
