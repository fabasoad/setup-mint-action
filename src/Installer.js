const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const fs = require('fs');
const os = require('os');
const path = require('path');

const Logger = require('./Logger');

class Installer {

  EXEC_FILE = 'mint';

  constructor(version) {
    this.version = version;
    this.logger = new Logger('Installer');
  }

  async install() {
    this.logger.info(`Downloading Mint ${this.version}...`);
    const oldPath = await tc.downloadTool(this.getUrl());
    this.logger.info(`Downloaded to ${oldPath}.`);
    const newPath = path.join(path.basename(path.dirname(oldPath)), this.EXEC_FILE);
    fs.renameSync(oldPath, newPath);
    this.logger.info(`Renamed to ${newPath}.`);
    
    const cachedPath = await tc.cacheDir('.', this.EXEC_FILE, this.version);
    core.addPath(cachedPath);
    this.logger.info(`Mint ${this.version} installed successfully.`);
  }

  getUrl() {
    let suffix;
    switch (os.type()) {
      case 'Darwin':
        suffix = 'osx';
        break;
      case 'Linux':
        suffix = 'linux';
        break;
      default:
        throw new Error('Windows is not supported.');
    }
    return `https://github.com/mint-lang/mint/releases/download/${this.version}/mint-${this.version}-${suffix}`;
  }
}

module.exports = Installer;