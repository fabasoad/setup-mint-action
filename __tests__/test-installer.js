const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const fs = require('fs');
const os = require('os');
const path = require('path');

const { assert } = require('chai');
const itParam = require('mocha-param');
const sinon = require('sinon');

const srcPath = process.env.SRC_PATH || path.join(process.cwd(), 'src/installer');
const { Installer, UnsupportedOSError } = require(srcPath);

const fixture = [{
  type: 'Darwin',
  suffix: 'osx'
}, {
  type: 'Linux',
  suffix: 'linux'
}];

describe('Test Installer class', () => {

  let coreAddPathStub;
  let fsChmodSyncStub;
  let fsRenameSyncStub;
  let osTypeStub;
  let tcCacheDirStub;
  let tcDownloadToolStub;

  beforeEach(() => {
    coreAddPathStub = sinon.stub(core, 'addPath');
    fsChmodSyncStub = sinon.stub(fs, 'chmodSync');
    fsRenameSyncStub = sinon.stub(fs, 'renameSync');
    osTypeStub = sinon.stub(os, 'type');
    tcCacheDirStub = sinon.stub(tc, 'cacheDir');
    tcDownloadToolStub = sinon.stub(tc, 'downloadTool');
  });

  itParam('should build correct url for ${value.type} OS', fixture, (supportedOS) => {
    osTypeStub.returns(supportedOS.type);

    const version = 'y50pgz2b';
    const installer = new Installer(version);

    const url = installer.getUrl();
    assert.equal(`https://github.com/mint-lang/mint/releases/download/${version}/mint-${version}-${supportedOS.suffix}`, url);
  });

  it('should not build url for Windows OS', () => {
    osTypeStub.returns('Windows_NT');

    const version = 'y50pgz2b';
    const installer = new Installer(version);

    try {
      installer.getUrl();
    } catch (e) {
      if (e instanceof UnsupportedOSError) {
        return;
      }
    }
    assert.Throw();
  });

  itParam('should install correctly for ${value.type}', fixture, async (supportedOS) => {
    const folderPath = 'x2no1z63' + path.sep;
    const oldPath = folderPath + 'gke7d78i';
    const newPath = folderPath + 'mint';
    const cachedPath = 'oze9ptz2';
    const version = 'y50pgz2b';
        
    osTypeStub.returns(supportedOS.type);
    tcDownloadToolStub.returns(oldPath);
    tcCacheDirStub.returns(cachedPath);
    
    const installer = new Installer(version);
    await installer.install();

    tcDownloadToolStub.calledOnceWith(
      `https://github.com/mint-lang/mint/releases/download/${version}/mint-${version}-${supportedOS.suffix}`
    );
    fsRenameSyncStub.calledOnceWith(oldPath, newPath);
    fsChmodSyncStub.calledOnceWith(newPath, '777');
    tcCacheDirStub.calledOnceWith(folderPath, 'mint', version);
    coreAddPathStub.calledOnceWith(cachedPath);
  });

  it('should not install for Windows OS', async () => {
    const folderPath = 'x2no1z63' + path.sep;
    const oldPath = folderPath + 'gke7d78i';
    const cachedPath = 'oze9ptz2';
    const version = 'y50pgz2b';

    osTypeStub.returns('Windows_NT');
    tcDownloadToolStub.returns(oldPath);
    tcCacheDirStub.returns(cachedPath);
    
    const installer = new Installer(version);
    try {
      await installer.install();
    } catch (e) {
      if (e instanceof UnsupportedOSError) {
        assert.isTrue(tcDownloadToolStub.notCalled);
        assert.isTrue(fsRenameSyncStub.notCalled);
        assert.isTrue(fsChmodSyncStub.notCalled);
        assert.isTrue(tcCacheDirStub.notCalled);
        assert.isTrue(coreAddPathStub.notCalled);
        return;
      }
    }
    assert.Throw();
  });

  afterEach(() => {
    sinon.restore();
  });
});