import React, {Component} from 'react'
import {render} from 'react-dom'
import axios from 'axios';

import AutoLoader from '../../src'

class Demo extends Component {

	constructor(props) {
		super(props);
		this.get = this.get.bind(this);
	}

	state = { data : ''}

	get(){
		const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
		const handler = data => this.setState({ data: JSON.stringify(data) });

		axios.get(apiUrl).then(handler).catch(handler);
	}

	render() {
	return <div>
			<AutoLoader/>
			<h1>react-auto-progress Demo</h1>
			<p>Just add the component and forget about all the rest</p>
			<button onClick={this.get}>Make my ajax requisition</button>
			<p>{this.state.data}</p>
		</div>
	}
}

render(<Demo/>, document.querySelector('#demo'))
