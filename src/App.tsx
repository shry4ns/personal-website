import React from 'react';
import logo from './logo.svg';
import {Box, Button, Heading, Grommet, Grid} from 'grommet';
import {Notification} from 'grommet-icons';
// import './App.css';
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


const AppBar = (props:any) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='light'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}/>
);

const rows:any = ['large']
const columns:any = ['flex', 'flex']

const App: React.FC = () => {
  return (
    <div className="App">
 <Grommet theme={theme}>
      <AppBar>
              Hello!
              <Heading level='3' margin='none'>My App</Heading>
              <Button icon={<Notification/>} onClick= {()=>{}}/>
      </AppBar>
  <Grid
  rows={rows}
  columns={columns}
  gap="medium"
  justifyContent = {"center"}
  fill = {true}>
  <Box background={"dark-1"}> Hi Hello jkwh;ljwdjjcl </Box>
  <Box background={"dark-1"}>Hi hello</Box>
</Grid>
</Grommet>
    </div>

  );
}

export default App;
