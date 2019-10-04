import React, {Component} from 'react';
import {Body, Header, Title} from "native-base";

import SignupForm from './SignupForm';

export default class SignUp extends Component {
	render() {
		return (
			<React.Fragment>
				<Header>
					<Body>
						<Title>Sign Up</Title>
					</Body>
				</Header>
				<SignupForm navigation={this.props.navigation} />
			</React.Fragment>
		);
	}
}