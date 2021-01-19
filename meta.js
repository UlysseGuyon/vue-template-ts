const path = require('path');
const { installDependencies, installPlugins, printMessage } = require('./utils');

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    title: {
      type: 'string',
      required: true,
      message: 'Project display title'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Description',
      default: 'Vue TypeScript Project'
    },
    author: {
      type: 'string',
      required: false,
      message: 'Author',
      default: 'Ulysse Guyon'
    },
    license: {
      type: 'string',
      required: false,
      message: 'License',
      default: 'MIT'
    },
    axios: {
      type: 'confirm',
      message: 'Add axios package for http requests ?',
      default: true
    },
    makeProxy: {
      type: 'confirm',
      message: 'Add a developpement proxy URL ?',
      default: true
    },
    proxyRoute: {
      when: 'makeProxy',
      type: 'string',
      required: false,
      message: 'Proxy route',
      default: '/api'
    },
    proxyProtocol: {
      when: 'makeProxy',
      type: 'string',
      required: false,
      message: 'Proxy protocol',
      default: 'http'
    },
    proxyDomain: {
      when: 'makeProxy',
      type: 'string',
      required: false,
      message: 'Proxy domain',
      default: 'localhost'
    },
    proxyPort: {
      when: 'makeProxy',
      type: 'string',
      required: false,
      message: 'Proxy port',
      default: '8080'
    },
    formatters: {
      type: 'confirm',
      message: 'Add formatter packages (numeral, moment) ?',
      default: false
    },
    installVuetify: {
      type: 'confirm',
      message: 'Add Vuetify plugin ?',
      default: true
    },
    installI18n: {
      type: 'confirm',
      message: 'Add i18n plugin ?',
      default: true
    },
    autoInstall: {
      type: 'confirm',
      message: 'Install node modules after configuration ?',
      default: true
    }
  },
  complete: function(data, { chalk }) {
    const green = chalk.green;

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName);

    if (data.autoInstall) {
      installDependencies(cwd, 'npm', green)
        .then(() => printMessage(data, green))
        .catch(e => console.error(chalk.red('Error:'), e))
        .then(() => {
          const pluginList = [];
          if (data.installVuetify)
            pluginList.push('vuetify');
          if (data.installI18n)
            pluginList.push('i18n');

          return installPlugins(cwd, 'vue', green, pluginList);
        });
    } else
      printMessage(data, chalk);
  }
};
