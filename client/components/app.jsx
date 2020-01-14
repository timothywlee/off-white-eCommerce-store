import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return this.state.isLoading
      ? <h1>Testing connections...</h1>
      : (
        <React.Fragment>
          <Header title='Wicked Sales' />
          <main className='container p-30' style={{ backgroundColor: '#f2f2f2' }}>
            <div className='row'>
              <div>
                <ProductList />
              </div>
            </div>
          </main>
        </React.Fragment>
      );
  }
}