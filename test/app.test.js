'use strict';

const assert = require('assert');
const path = require('path');
const mock = require('egg-mock');

it('should run hypnotize', function* () {
  const app = mock.app({
    baseDir: path.resolve(__dirname, 'fixtures/simple-app'),
  });
  yield app.ready();
  const title = yield app.hypnotize()
    .goto('/foo')
    .title()
    .end();
  assert.equal(title, 'foo');
});
