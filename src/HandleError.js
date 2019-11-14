import React from 'react';

export default class HandleError extends React.Component {
    state = {hasError: null};
    static getDerivedStateFromError(error) {
        console.error(error);
        this.setState({hasError: error})
    }

    render() {
        if (this.state.hasError) {
            return (
                <main className='error-page'>
                    <h1>An error has occurred.</h1>
                    <p>Please refresh and try again.</p>
                </main>
            )
        }
        return this.props.children
    }
}