var gulp = require('gulp');
var replace = require('gulp-replace-task');
var fs = require('fs');
var ts = require('gulp-typescript');

var paths = {
  // ts: ['./Test/Test.ts']
  ts: [
    './**/*.ts', 
    '!./ZZZcompiled/**/*.ts',
    '!./node_modules/**/*.ts',
    '!./typings/browser.d.ts',
    '!./typings/browser/**/*.ts'

  ]
};
gulp.task('default', function () {
  gulp.src(paths.ts)
    .pipe(replace({
      patterns: [
        {
          match: /import { (.*) } from "\.\.\/(.*)";/g,
          replacement: function(match, moduleName, modulePath){
            console.log("match :::\n", match);
            var wholeString = fs.readFileSync(modulePath + '.ts', 'utf8');
            var reg = new RegExp('export class ' + moduleName + '[\\s\\S]+^}', 'm');
            var result = wholeString.match(reg);
            console.log("result :::\n", result);
            return result[0];
          }
        }
      ]
    }))
    .pipe(ts({
      module: 'commonjs',
      taget: 'es5',
      noImplicitAny: true,
      sourceMap: false
    }))
    .pipe(gulp.dest('./'));
});
