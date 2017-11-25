const { allSongs, song, Song, addSong } = require('./songs')
const { allPerformers, performer, Performer } = require('./performers')

const resolvers = {
  Query: {
    allSongs,
    song,
    allPerformers,
    performer
  },
  Song,
  Performer,
  Mutation: {
    addSong
  }
}

module.exports = resolvers
