import React from 'react';
import {Box, Grid} from 'grommet';
  
const rows:Array<string> = ['flex'];
const columns:Array<string> = ['flex', 'flex'];

const About = (props:any) => (<Box
    pad = "xlarge"
    >
    Hi, this is Shryans. I'm a junior at Rice University studying Computer Science.
    I'm interested in PM, AI and Data Science. I love learning about the intersection
    of CS and othr fields.
</Box>);

const Landing: React.FC = () => {
    return (
    <div>
       <Grid
       rows={rows}
       columns={columns}
       gap="medium"
       justifyContent = {"center"}
       fill = {true}>
            <Box> 
                <About/>
            </Box>
            <Box background={"dark-1"}>Hi hello</Box>
       </Grid>
    </div>
  
    );
  }
  
  export default Landing;
