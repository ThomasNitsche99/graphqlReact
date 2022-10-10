import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { useCharacters } from '../hooks/useCharaters';
import { useLazyCharacter } from '../hooks/useLazyCharacter';
import BasicModal from './BasicModal';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {

    const {error, loading, data} = useCharacters()
    
    if(loading) return <div>Spinner!</div>

    if(error) return <div>Something went wrong</div>

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Rick and Morty Characters
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Rick and Morty characters
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              This is an page which gives you all the different characters from the rick and morty show!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                <Link to={"/search"}>
                    <Button variant="contained">Go to search field</Button>
                </Link>
            </Stack>
          </Container>
        </Box>

        

        {loading && <div>spinner..</div>}
        {error && <div>something went wrong!</div>}
        {data && 

                <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                    <Grid container spacing={4}>

                        {data.characters.results.map(character =>{
                            return(
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                        >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                            // 16:9
                                            pt: '56.25%',
                                            }}
                                            image={character.image}
                                            alt="image"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {character.name}
                                            </Typography>
                                        </CardContent>

                                        <CardActions>
                                            <Link to={`/${character.id}`}>
                                                <Button size="small">View Character</Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            }
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}