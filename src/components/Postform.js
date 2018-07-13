import React, { Component } from 'react'

export default class Posts extends Component {

	constructor(){
		super();
		this.state = {
			title: '',
			body: ''
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(event){
		this.setState({ [event.target.name]: event.target.value })
	}

	onSubmit(event){
		event.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type' : 'application/json'
			},
			body: JSON.stringify(post)
		})
		.then(res => res.json())
		.then(data => console.log(data))
	}

	render(){

		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title: </label>
						<br />
						<input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
					</div>
					<br />
					<div>
						<label>Body: </label>
						<br />
						<textarea name="body" value={this.state.body} onChange={this.onChange}/>
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
			)
	}
}