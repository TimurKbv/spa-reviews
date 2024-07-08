import React from 'react';
import Header from './components/Header.component';
import Main from './components/Main.component';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;