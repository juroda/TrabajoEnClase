import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Tags extends PureComponent {
    render(){
        const { tags } = this.props;
        return(
            <div className='tags'>
            <h3>Tags</h3>
            {tags.map((tags, key) => <p key={key}>{tag}</p>)}
            </div>
        );
    }
}

Tags.PropTypes = {
    tag: PropTypes.String
};