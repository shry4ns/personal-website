import React from 'react';
import {Box, Heading, Button} from 'grommet';
import {Notification} from 'grommet-icons';



const Nav = (props:any) => (
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


const AppBar: React.FC = () => {
    return(
        <Nav>
        Hello!
        <Heading level='3' margin='none'>My App</Heading>
        <Button icon={<Notification/>} onClick= {()=>{}}/>
</Nav>
    )
}

export default AppBar;