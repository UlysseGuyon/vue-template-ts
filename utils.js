// file modified from https://github.com/vuejs-templates/webpack

const spawn = require('child_process').spawn;

exports.installDependencies = function installDependencies(
  cwd,
  executable = 'npm',
  color
) {
  console.log(`\n\n# ${color('Installing project dependencies ...')}`);
  console.log('# ========================\n');
  return runCommand(executable, ['install'], {
    cwd
  });
}

exports.installPlugins = function installPlugins(
  cwd,
  executable = 'vue',
  color,
  pluginList
) {
  console.log(`\n\n# ${color('Installing plugins ...')}`);
  console.log('# ========================\n');
  return runCommand(executable, ['add', ...pluginList], {
    cwd
  });
}

exports.printMessage = function printMessage(data, { green, yellow }) {
  const message = `
# ${green(`${data.name} generated !`)}
# ========================
To get started:
  ${yellow(
    `${data.inPlace ? '' : `cd ${data.destDirName}\n`}${installMsg(
      data
    )}  npm run lint\n  npm start`
  )}
`;
  console.log(message);
}

function installMsg(data) {
  return !data.autoInstall ? '  npm install\n' : '';
}

function runCommand(cmd, args, options) {
  return new Promise((resolve, reject) => {
    const command = spawn(
      cmd,
      args,
      Object.assign(
        {
          cwd: process.cwd(),
          stdio: 'inherit',
          shell: true
        },
        options
      )
    );

    command.on('exit', () => resolve());
  });
}