# egg-hypnotize

[![Greenkeeper badge](https://badges.greenkeeper.io/Gerhut/egg-hypnotize.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/Gerhut/egg-hypnotize.svg?branch=master)](https://travis-ci.org/Gerhut/egg-hypnotize)
[![dependencies Status](https://david-dm.org/Gerhut/egg-hypnotize/status.svg)](https://david-dm.org/Gerhut/egg-hypnotize)
[![devDependencies Status](https://david-dm.org/Gerhut/egg-hypnotize/dev-status.svg)](https://david-dm.org/Gerhut/egg-hypnotize?type=dev)

egg.js plugin of hypnotize

## Install

    $ npm install --save-dev egg-hypnotize
    
## Use

Add following to `plugin.unittest.js`

```JavaScript
exports.hypnotize = {
    enable: true,
    package: 'egg-hypnotize',
};
```

Now you can use hypnotize in your unit test

```JavaScript
it('title of `/foo` should be "Foo"', function* () {
    const title = yield app.hypnotize()
        .goto('/foo')
        .title()
        .end();
    assert(title === 'Foo');
});
```

## License

MIT
