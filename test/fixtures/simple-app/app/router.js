'use strict';

module.exports = app => {
  app.get('/foo', app.controller.foo);
};
