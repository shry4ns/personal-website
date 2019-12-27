import React from 'react';
import {Grommet} from 'grommet';
import Landing from './components/Landing';
import AppBar from './components/AppBar';

const theme:any = {
  global: {
          colors:{
                  brand: '#228BE6'
          },
    font: {
      family: 'Roboto'
    },
  },
};


const App: React.FC = () => {
  return (
    <div className="App">
      <Grommet theme={theme}>
        <AppBar/>
      <Landing/>
      </Grommet>
    </div>

  );
}

export default App;
