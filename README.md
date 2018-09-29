# Linkedin™ Import

[![Build Status](https://travis-ci.org/knohime/linkedin-import.svg?branch=master)](https://travis-ci.org/knohime/linkedin-import)
[![Build status](https://ci.appveyor.com/api/projects/status/p4p5regivrmva75o/branch/master?svg=true)](https://ci.appveyor.com/project/emmanuelgautier/linkedin-import/branch/master)
[![codecov](https://codecov.io/gh/knohime/linkedin-import/branch/master/graph/badge.svg)](https://codecov.io/gh/knohime/linkedin-import) [![Greenkeeper badge](https://badges.greenkeeper.io/knohime/linkedin-import.svg)](https://greenkeeper.io/)

> Linkedin™ archive export module

## Install

```
$ npm install @knohime/linkedin-import
```

## Usage
```js
import linkedinImport from '@knohime/linkedin-import';

const exportedObject = await linkedinImport(data);

// use data imported
const name = `${exportedObject.profile.firstname} ${exportedObject.profile.lastname}`
```

[API](https://knohime.github.io/linkedin-import/)

## Maintainers

- [Emmanuel Gautier](https://github.com/emmanuelgautier)

## License

MIT
