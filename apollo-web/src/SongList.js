import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './SongList.css'
import FaRocket from 'react-icons/lib/fa/rocket'
import AddSongForm from './AddSongForm'

export const allSongsQuery = gql`
  query songs {
    allSongs {
      id
      title
      numberOne
      performer {
        name
      }
    }
  }
  `
const Song = ({ title, numberOne, performer: {name} }) =>
      <div className="song">
        <h2>{title} {(numberOne)
                      ? <span className="numberOne"><FaRocket /></span>
                      : null}
        </h2>
        <span className="performer">by: {name}</span>

      </div>

const SongList = ({songs: {loading, allSongs}}) => loading ?
      <h1>Loading Songs</h1> :
      <div className="songs">
      <AddSongForm />
        {allSongs.map(song =>
          <Song key={song.id} {...song} />
        )}
      </div>

export default graphql(allSongsQuery, {name: "songs"})(SongList)
