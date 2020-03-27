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
    const index = oldPath.lastIndexOf(path.sep);    
    const folderPath = oldPath.substring(0, index);
    const newPath = path.join(, this.EXEC_FILE);
    fs.renameSync(oldPath, newPath);
    this.logger.info(`Renamed to ${newPath}.`);
    fs.chmodSync(newPath, '777');
    this.logger.info(`Access permissions changed to 777.`);
    
    const cachedPath = await tc.cacheDir(folderPath, this.EXEC_FILE, this.version);
    core.addPath(cachedPath);
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