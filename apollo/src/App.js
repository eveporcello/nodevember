import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SongList from './SongList'
import PerformerList from './PerformerList'
import { Switch, Route, NavLink } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">React Tracks</h1>
					<nav>
						<NavLink to="/">All Songs</NavLink>
						<NavLink to="/performers">All Performers</NavLink>
					</nav>
				</header>
				<Switch>
					<Route exact path="/" component={SongList} />
					<Route exact path="/performers" component={PerformerList} />
				</Switch>
			</div>
		)
	}
}

export default App
