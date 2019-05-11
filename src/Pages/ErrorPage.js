import React, { Component } from 'react'


class ErrorPage extends Component {
    state = {error: null};
    // Static method
    static getDerivedStateFromError(error) {
        // Called when an error is thrown in a child component
        console.error( error);
        // Store the error in the state
        return {error};
    }
    render() {
        // If there was an error, show an error page
        if (this.state.error) {
            this.props.history.push('/')
            return (
                <main className="error-page">
                    <h1>Something seems to have gone wrong</h1>
                    <p>Try refreshing the page</p>
                </main>
            );
        }
        // Otherwise, render the children
        console.log('this is running')
        return this.props.children;
    }
}
export default ErrorPage