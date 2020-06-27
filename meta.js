const path = require('path');
const { installDependencies, printMessage } = require('./utils');

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
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
    devServ: {
      when: 'makeProxy',
      type: 'string',
      required: false,
      message: 'Developpement server address',
      default: 'http://localhost:443'
    },
    formatters: {
      type: 'confirm',
      message: 'Add formatter packages (numeral, moment) ?',
      default: false
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
    } else
      printMessage(data, chalk)
  }
};
