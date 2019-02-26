import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };
    // this is a callback
    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    // this is a callback to a child element
    onFormSubmit = event => {
        event.preventDefault();
        // Make sure to callback from parent component
        this.props.onFormSubmit(this.state.term);
    };
    render() {
        return ( <
            div className = "search-bar ui segment" >
            <
            form onSubmit = {
                this.onFormSubmit
            }
            className = "ui form" >
            <
            div className = "field" >
            <
            label > Video Search < /label> <
            input type = "text"
            value = {
                this.state.term
            }
            // this is the callback method
            onChange = {
                this.onInputChange
            }
            /> < /
            div > <
            /form> < /
            div >
        );
    }
}

export default SearchBar;