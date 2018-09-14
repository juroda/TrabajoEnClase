import React, {PureComponent} from 'react';

export default class Color extends PureComponent{
    render(){
        const {eyeColor}= this.props;
        const divStyle = {color: eyeColor};
        return(
            <p>
            Eyes color: <span style={divStyle}>👁👁</span>
            </p>
        );

    }
}