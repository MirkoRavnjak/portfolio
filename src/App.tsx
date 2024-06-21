import React from 'react';
import '@fontsource/inter';

//import logo from './logo.svg';
import theme from './theme';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider, styled, useColorScheme} from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';   

import ModeToggle from './components/mode-toggle/ModeToggle';
import './App.css';
import { Button, FormControl, FormLabel, Input, Link, Sheet, Typography, Stack, Grid, ListItemButton, ListItemDecorator, ListItemContent } from '@mui/joy';
import { red } from '@mui/material/colors';
import { readlink } from 'fs/promises';
import Home from '@mui/icons-material/Home';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import About from './components/about';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import { AlignHorizontalCenterOutlined, AlignVerticalCenter, FormatAlignJustify, Padding } from '@mui/icons-material';



const materialTheme = materialExtendTheme();

const StyledSheet = styled(Sheet)({
  
    margin: '28px auto',
  // mx: 'auto', // margin left & right
  // my: 4, // margin top & bottom
    padding: '28px 14px', 
  //  py: 3, // padding top & bottom
  //  px: 2, // padding left & right
    display: 'flex',
    flexDirection: 'column',
    spacing: '10',
    borderRadius: 10,
    boxShadow: '10',
    variant: "outlined"

})

const StyledHeading = styled(Typography)({
  color: '#d5bda2',
  // fontSize: '3em',
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: '0px',
  // '@media screen and (min-width:1025px)': {
  //   fontSize: '7em'
  // }
})

const StyledStack = styled(Stack)({
  // width: 300,
  xs: 8,
  md: 6,
  lg: 2,
  margin: '28px auto',
// mx: 'auto', // margin left & right
// my: 4, // margin top & bottom
  padding: '28px 14px', 
//  py: 3, // padding top & bottom
//  px: 2, // padding left & right
  display: 'flex',
  flexDirection: 'column',
  spacing: '10',
  borderRadius: 10,
  boxShadow: '10',
  variant: "outlined"
})

const Item = styled(Sheet)(({ theme })=> ({
  //backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.level2 : '#3d97bb',
  backgroundColor: theme.palette.mode === 'dark' ? '#1b4712' : '#3d97bb',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 3,
  color: theme.palette.mode === 'dark' ? theme.vars.palette.text.secondary: theme.vars.palette.text.primary,
  //sx: { xs: '10', md: '8'},
  margin: '10px'
}));

const Body = styled(Grid)(({theme})=>({

  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.mode === 'dark' ? '#198294': '#dce5f0',
  border: theme.palette.mode === 'dark' ? '2px solid blue': '2px solid red',
}))

const Row = styled(Grid)(({theme})=>({
  display: 'flex',
  flexDirection: 'row',
  padding: '20px',
  margin: '1px auto',
  justifyContent: 'space-between',

  backgroundColor: theme.palette.mode === 'dark' ? '#455a64': '#86b8c9',
  border: theme.palette.mode === 'dark' ? '1px solid #86b8c9': '1px solid #455a64'
}))

const Column = styled(Grid)(({theme})=>({
  flexDirection: 'column',
  backgroundColor: theme.palette.mode === 'dark' ? '#0a151a': '#81a6b4',
  border: theme.palette.mode === 'dark' ? '1px solid #86b8c9': '1px solid #455a64',
  borderRadius: 4,
  alignContent: 'center',
}))

const RightIcon = styled(KeyboardArrowRightIcon)({
  '@media screen and (min-width:1200px)': {
    display: 'block'
  },
  '@media screen and (max-width:1199px)': {
    display: 'none'
  }
})

const Decorator = styled(ListItemDecorator)(({theme}) => ({
  margin: 0,
  padding: 0,
  color: theme.palette.mode === 'dark' ? '#73c268': '#0d0aa1',
  '@media screen and (min-width:1024px)': {
    display: 'block'
  },
  '@media screen and (max-width:1023px)': {
    display: 'none'
  }
}))

const ButtonList = styled(ListItemButton)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#0a151a': '#81a6b4',
  '&:hover':{
    backgroundColor: 'red',
}
}))

const ListItemStyled = styled(ListItem)(({theme})=>({
  minWidth: '90%',
  maxWidth: '90%',
  //minMax: '80%', 
  margin:'5px auto',
  color: theme.palette.mode === 'dark' ? '#419e39': '#0a151a',
  border: theme.palette.mode === 'dark' ? '1px solid #4e0728': '1px solid #0a0ef0',
  borderRadius: '5px',
  //backgroundColor:  'blue',
  backgroundColor: theme.palette.mode === 'dark' ? '#242022': '#77cbe9',
  // backgroundColor: theme.palette.mode === 'dark' ? '#81a6b4': '#0a151a',
  '&:hover':{
    backgroundColor: theme.palette.mode === 'dark' ? '#07411a': '#197697',
  },
  textAlign: 'center',
  zIndex: 3,
}))
 //border: theme.palette.mode === 'dark' ? '1px solid #86b8c9': '1px solid #455a64',
const ListContent = styled(ListItemContent)({
  '@media screen and (max-width:1023px)': {
    textAlign: 'center'
  }
  
})


export default function App() {

return (  
  <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
    <JoyCssVarsProvider >
      <CssBaseline enableColorScheme />   
 
      <Body  container xs={12} mt={1} spacing={2} gap={2}  p={2} >
   
        <ModeToggle   />
     
        <Row container xs={12}  md={11} spacing={2} >
          <Column xs={4.5} md={2} sx={{display: {xs: 'none', sm: 'block', md: 'block'}}}>
            <Item ><h1>W1</h1></Item>         
            <Item><h2>This is porftolio</h2></Item>
          </Column>

          <Column xs={12} sm={7}>
            <Item ><h1>W2</h1></Item>          
            <Item><h2>This is porftolio</h2></Item>
          </Column>

          <Column  md={2} sx={{display: {xs: 'none', md: 'block'} }} >
            <List > 
              <ListItemStyled >
                <ListItemButton >
                  <Decorator><HomeTwoToneIcon /></Decorator>
                  <ListContent >Home</ListContent>
                  <RightIcon />
                </ListItemButton>
              </ListItemStyled>
              <ListItemStyled >
               <ListItemButton >
                 <Decorator><PersonOutlineTwoToneIcon /></Decorator>
                 <ListContent>About</ListContent>
                 <RightIcon />
               </ListItemButton>
              </ListItemStyled>
              <ListItemStyled >
               <ListItemButton>
                 <Decorator><DescriptionOutlinedIcon/></Decorator>
                 <ListContent>Resume</ListContent>
                 <RightIcon />
               </ListItemButton>
              </ListItemStyled>
            </List>
            {/* <Item ><h1>W3</h1></Item> 
            <Item><h2>This is portfolio</h2></Item> */}
          </Column>

        </Row>
      </Body>
    </JoyCssVarsProvider>
  </MaterialCssVarsProvider>

  );
  
}

{/* <div className='App'>
<p>
  Portfolio
</p>  
<ModeToggle />
</div> */}

{/* <JoyCssVarsProvider theme={theme} defaultmode="system">
      <CssBaseline />
      <ColorSchemeToggle />
      
        <Home/>
      
    </JoyCssVarsProvider> */}
   
    
  
    //   return (
    //     <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
    //       <JoyCssVarsProvider>
    //         <CssBaseline enableColorScheme />
    //         ...Material UI and Joy UI components
    //       </JoyCssVarsProvider>
    //     </MaterialCssVarsProvider>
    //   );
    // }
    