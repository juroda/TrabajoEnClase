import React, { PureComponent } from 'react';

export default class Amigos extends PureComponent {
    render () {
        const { friends } = this.props;
        const divStyle = {border: '1px solid rgba(238, 238, 238, 0.3)'};
        return(
            <div className='friends' style={divStyle}>
            <h3>Friends</h3>
            {friends.map((friends, key)=> <p key={key}>{friends.name}</p>)}
            </div>
        );
    }
}