import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        console.log("boundary constructor")

        super(props)
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    
    componentDidCatch(error, errorInfo) {
        this.setState({ 
            error: error,
            errorInfo: errorInfo
        });
        console.log("did catch", errorInfo)
    }


    render() {
        if (this.state.error) {
            console.log('aaaaaa')
            return (
                <>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
                </>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary

