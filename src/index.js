const core = require('@actions/core');
const Installer = require('./Installer');

(async () => {
  const installer = new Installer(core.getInput('version'));
  await installer.install();
})();