import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './PerformerList.css'

export const allPerformersQuery = gql`
  query performers {
    allPerformers {
      name
      songs {
        title
      }
    }
  }
`

const Performer = ({ name, songs }) =>
      <div className="performer">
        <h2>{name}</h2>
        <ul>
          {songs.map(song => <li>{song.title}</li>)}
        </ul>
      </div>

const PerformerList = ({performers: {loading, allPerformers}}) =>
      loading ?
      <h1>Loading Performers</h1> :
      <div className="performer-list">
        <ul>
          {allPerformers.map(performer =>
            <Performer key={performer.id} {...performer} />
          )}
        </ul>
      </div>

export default graphql(allPerformersQuery, {name: "performers"})(PerformerList)
