const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

let app =  document.querySelector('.app');

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name : "..."
		}
	}

	componentDidMount() {
		var self = this;
		axios.get('/api/one').then((res) => {
			self.setState({
				name: res.data.name
			})
		});
	}

	render() {
		return <div>
			Kakhulu react app : {this.state.name}

			<input type="text" onChange={(evt) => {
				this.setState({
					name: evt.target.value
				});
			}} value={this.state.name} />


		</div>	
	}

	
}

ReactDOM.render(<App/>, app);