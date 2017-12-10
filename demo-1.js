var split = require('split2')
var fs = require('fs')
var hyperdb = require('hyperdb')
var db = hyperdb('./hyperdb')
var through = require('through2')

fs.createReadStream('words_alpha.txt')
  .pipe(split())
  .pipe(through.obj(function (word, enc, cb) {
    console.log('put', word)
    db.put(word, word, function (err) {
      cb(err)
    })
  }))
  .on('finish', function () {
    console.log('(done)')
  })
