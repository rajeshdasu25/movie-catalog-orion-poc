import React from 'react';
import {Navbar, Form, FormControl} from 'react-bootstrap';

const AppHeader = (props) => {
	return (
		<Navbar bg="primary" variant="dark">
	        <Navbar.Brand href="#home">Movie Catalog</Navbar.Brand>
	        <Form inline>
	          <FormControl type="text" placeholder="Search" className="mr-sm-8" value={props.query} 
	          onChange={event => props.setQuery(event.target.value)} />
	        </Form>
	      </Navbar>
	);
};

export default AppHeader;