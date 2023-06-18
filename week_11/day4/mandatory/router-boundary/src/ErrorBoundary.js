import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            errorInfo: null,
            errorLocationHref: null,
        }
    }

    
    componentDidCatch(error, errorInfo) {
        this.setState({ 
            hasError: error,
            errorInfo: errorInfo,
            errorLocationHref: window.location.href
        });
        console.log("did catch", errorInfo)
    }

    componentDidUpdate(prevProps) {
        if (this.state.hasError && window.location.href !== this.state.errorLocationHref) {
          this.setState({ 
            hasError: false,
            errorLocationHref: null,
            errorInfo: null
        });
        }
    }


    render() {
        if (this.state.hasError) {
            return (
                <>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.hasError && this.state.hasError.toString()}
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

