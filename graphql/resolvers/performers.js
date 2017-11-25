const performers = require('../data/performers')
const songs = require('../data/songs')
const { find, filter } = require('lodash')

const allPerformers = () => performers

const performer = (_, { name }) => find(performer, { name })

const Performer = {
  songs: p => filter(songs, { performerId: p.id })
}

module.exports = { allPerformers, performer, Performer }
