var hyperdb = require('hyperdb')

var db = hyperdb('./db', {map: node => node.value.toString()})

db.put('hello', 'world', function () {
  db.get('hello', console.log)
})
