import { Component, ReactNode } from 'react'

type Props = {
  children: ReactNode
  fallback?: ReactNode
}

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, info: any) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="page-loading" role="alert" aria-live="assertive" style={{ padding: 24, textAlign: 'center' }}>
          <h2 style={{ marginBottom: 12 }}>Something went wrong</h2>
          <p style={{ color: 'rgba(7,30,31,0.7)' }}>
            The content could not be loaded. Please try again or return to the home page.
          </p>
          <a href="/" className="button-link" aria-label="Return to Home">
            <span className="hero-button-secondary">Go Home</span>
          </a>
        </div>
      )
    }
    return this.props.children
  }
}

