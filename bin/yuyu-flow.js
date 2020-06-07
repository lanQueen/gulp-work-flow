#!/usr/bin/env node

// Node CLI 应用入口文件必须要有上面展示的文件头
    // 如果系统是 Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755，具体是通过  chomd 755 cli.js 实现修改

process.argv.push('--cwd');
process.argv.push(process.cwd());
process.argv.push('--gulpfile');
// require.resolve('../lib/index')，由于 package.json 中设置了 主入口文件为 lib/index.js，路径可以简写为 ..
process.argv.push(require.resolve('..'));
require('gulp/bin/gulp');

// console.log(process.argv); 
// [
//   '/usr/local/bin/node',
//   '/usr/local/bin/yuyu-flow',
//   '--cwd',
//   '/Users/yuling/program/myFiles/ECMAScript/frontend/P2/M1-AutoBuild/gulp/yuyu-flow',
//   '--gulpfile',
//   '/Users/yuling/program/myFiles/ECMAScript/frontend/P2/M1-AutoBuild/gulp/yuyu-flow/lib/index.js'
// ]