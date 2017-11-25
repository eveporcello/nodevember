import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const addSongMutation = gql`
  mutation addSong($title: String!, $numberOne: Boolean, $performerName: String!){
    addSong(title:$title, numberOne:$numberOne, performerName:$performerName) {
      title
      performer {
        id
      }
    }
  }
  `

class AddSongForm extends Component {
	state = {
		title: '',
		numberOne: '',
		performerName: ''
	}
	constructor() {
		super()
		this.submit = this.submit.bind(this)
	}
	submit(e) {
		e.preventDefault()
		const { title, numberOne, performerName } = this.state
		this.props.addSong({
			variables: {
				title,
				numberOne,
				performerName
			}})
	}
	render() {
		return (
			<form className="add-song-form" onSubmit={this.submit}>
				<input
					type="text"
					placeholder="song title..."
					defaultValue={this.state.title}
					required
					onChange={e => this.setState({ title: e.target.value })}
				/>
				<input
					type="text"
					placeholder="number one? true/false"
					defaultValue={this.state.numberOne}
					onChange={e => {
            if(e.target.value === "false") {
              this.setState({ numberOne: false })
            } else {
              this.setState({ numberOne: true })
            }}}
				/>
				<input
					type="text"
					placeholder="performer name"
					defaultValue={this.state.performerName}
					required
					onChange={e => this.setState({ performerName: e.target.value })}
				/>
				<button>Add Song</button>
			</form>
		)
	}
}

export default graphql(addSongMutation, { name: 'addSong' })(AddSongForm)
