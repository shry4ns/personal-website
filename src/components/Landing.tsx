import React from 'react';
import {Box, Grid, Heading, Text} from 'grommet';
import First from './first.jpg';
  
const rows:Array<string> = ['flex'];
const columns:Array<string> = ['flex', 'flex'];

const About = (props:any) => (<Box
    pad = "xlarge"
    responsive= {true}
    // elevation= "small"
    margin= "medium"
    background= '#ff7d28'
    {...props}
    >
    <Text size= "large" color='light-1'>Hi, this is Shryans. I'm a junior at Rice University studying Computer Science.
    I'm interested in PM, AI and Data Science. I love learning about the intersection
    of CS and othr fields.
    </Text>
</Box>);

const Landing: React.FC = () => {
    return (
    <div>
       <Grid
       rows={rows}
       columns={columns}
       gap="medium"
       justifyContent = {"center"}
       style={{background: '#ff7d28'}}
       fill = {true}>
            <Box> 
                <About />
            </Box>
            <Box background='white'
            pad= 'large'>
                <img src={First}></img>
            </Box>
       </Grid>
    </div>
  
    );
  }
  
  export default Landing;
