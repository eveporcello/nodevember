const songs = require('../data/songs')
const performers = require('../data/performers')
const { find } = require('lodash')
const shortid = require('shortid')
const { save } = require('./save-to-file')

const allSongs = () => songs

const song = (_, { title }) => find(songs, { title })

const Song = {
	performer: song => find(performers, { id: song.performerId })
}

const addSong = (_, { title, numberOne = false, performerName }) => {
	var performer = performers.filter(
		p => p.name.toLowerCase() === performerName.toLowerCase()
	)
	if (performer[0]) {
		var newSong = {
			title,
			numberOne,
			performerId: performer[0].id,
			id: shortid.generate()
		}
		songs.push(newSong)
		save(songs, 'songs.json')
		return newSong
	} else if(!performer[0]) {
    var newSong = {
      title,
      numberOne,
      performerId: shortid.generate(),
      id: shortid.generate()
    }
    songs.push(newSong)
    save(songs, 'songs.json')
    var newPerformer = {
      id: newSong.performerId,
      name: performerName
    }
    performers.push(newPerformer)
    save(performers, 'performers.json')
    return newSong
	}
}

module.exports = { allSongs, song, Song, addSong }
