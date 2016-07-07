var AllItems = React.createClass({ 
	getInitialState() { 
		return { items: [] }
	},
	componentDidMount() { 
		$.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) }); 
	},
	
	componentDidMount() { console.log('Component mounted'); 
	}, 

	render() { 
		var items= this.state.items.map((item) => { 
			return ( 
				<div key = {item.id} >
					<h3>{item.name}</h3>
					<p>{item.status}</p> 
					<p>{item.description}</p> 
				</div> ) 
			});

		return ( 
			{ item } 
			) 
	} 
});


