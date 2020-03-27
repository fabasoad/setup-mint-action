const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const fs = require('fs');
const os = require('os');

const Logger = require('./Logger');

class Installer {

  EXEC_FILE = 'mint';

  constructor(version) {
    this.version = version;
    this.logger = new Logger('Installer');
  }

  async install() {
    this.logger.info(`Downloading Mint ${this.version}...`);
    const downloadedFile = await tc.downloadTool(this.getUrl());
    this.logger.info(`Installing Mint ${this.version}...`);
    await fs.rename(downloadedFile, this.EXEC_FILE);
    
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