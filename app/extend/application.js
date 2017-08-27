'use strict';

const hypnotize = require('hypnotize');
const extend = require('extend2');

module.exports = {
  hypnotize(options) {
    options = extend(this.config.hypnotize, options);
    return hypnotize(this.callback(), options);
  },
};
