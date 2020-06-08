# yuyu-flow

[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> Awesome node module

## Installation

```shell
$ yarn add yuyu-flow

# or npm
$ npm install yuyu-flow
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const gulpWorkFlow = require('yuyu-flow')
const result = yuyuFlow('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### yuyuFlow(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

```shell
$ yarn global add yuyu-flow

# or npm
$ npm install yuyu-flow -g
```

```shell
$ yuyu-flow --help

  Usage: yuyu-flow <input>

  Options:

    -V, --version  output the version number
    -H, --host     Email host
    -h, --help     output usage information
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; lanQueen <752177836@qq.com>



[downloads-image]: https://img.shields.io/npm/dm/yuyu-flow.svg
[downloads-url]: https://npmjs.org/package/yuyu-flow
[version-image]: https://img.shields.io/npm/v/yuyu-flow.svg
[version-url]: https://npmjs.org/package/yuyu-flow
[license-image]: https://img.shields.io/github/license/lanQueen/yuyu-flow.svg
[license-url]: https://github.com/lanQueen/yuyu-flow/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/lanQueen/yuyu-flow.svg
[dependency-url]: https://david-dm.org/lanQueen/yuyu-flow
[devdependency-image]: https://img.shields.io/david/dev/lanQueen/yuyu-flow.svg
[devdependency-url]: https://david-dm.org/lanQueen/yuyu-flow?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
