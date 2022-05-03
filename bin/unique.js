#!/usr/bin/env node

const unique = require('../dist/unique.cjs')

const argv = process.argv.slice(2)

const helpOption = argv.includes('--help') || argv.includes('-h')
const sizeOption = argv.includes('--size') || argv.includes('-s')

if (helpOption || (argv.length && !sizeOption)) {
  console.log(`
  Usage
    $ sunique [options]
  Options
    -s, --size       Generated ID size
    -h, --help       Show this help
  Examples
    $ sunique --s 20
    y8n69mohr3pmf7vg19to`)
  process.exit()
}

if (!sizeOption) {
  console.log(unique())
  process.exit()
}

const size = parseInt(argv[1])
const isNumber = !Number.isNaN(size)
const isSize = sizeOption && isNumber && size > 0

if (isSize) console.log(unique(size))
else console.error('Size must be positive integer')
