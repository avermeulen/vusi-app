const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

let app = document.querySelector('.app');

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: "...",
			upper: ""
		}
	}

	async componentDidMount() {
		var self = this;
		await axios.get('/api/one');
		self.setState({
			name: res.data.name
		});

	}

	submitForm = async (evt) => {
		evt.preventDefault();

		await axios.post('/api/one', { name: this.state.name });
		this.setState({
			name: ""
		})

	}

	render() {
		return <div>
			Kakhulu react app : {this.state.name}

			<div>
				<i>{this.state.upper}</i>
			</div>

			<div>
				<form action="#" onSubmit={this.submitForm}>
					<input type="text" onChange={(evt) => {
						this.setState({
							upper: evt.target.value.toUpperCase(),
							name: evt.target.value
						});
					}} value={this.state.name} />

					<button type="submit">Submit</button>

				</form>
			</div>
			
			<h2>Multiple Choice quiz builder</h2>

			<div>
				<h3>This is a quiz</h3>
				
				<input type="text" placeholder="Add answer..." />
				<button>Add question</button>

				<div>
				<h4>This is a question</h4>

				<div>
					<h5>Possible answers</h5>
					<ul>
						{/* <li>
							<input type="checkbox" name="" id=""/>
							Answer one...
						</li> */}
						<li>
							<input type="text" placeholder="Add answer..." />
							<input type="button" value="Add answer" />
						</li>
					</ul>
				</div>

			</div>


			</div>


		</div>
	}


}

ReactDOM.render(<App />, app);