import React, { PureComponent } from 'react';

export default class FotoPerfil extends PureComponent {
	render () {
		const { picture } = this.props;
		return <img src={picture} />;
	}
}
