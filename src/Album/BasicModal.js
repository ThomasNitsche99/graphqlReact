import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useCharacter } from '../hooks/useCharacter';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const { data, loading, error } = useCharacter(5);



    return (
        <div>
            <Modal
                onClose={props.close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                {error && <Box><Typography variant='h5'> Something went wrong</Typography></Box>}
                {loading && <Box><Typography variant='h5'>Loading..</Typography></Box>}
                {data &&
                    <Box sx={style}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                image={data.character.image}
                                alt="image"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {data.character.name}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {data.character.gender}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Button onClick={props.close} />
                    </Box>
                }
            </Modal>
        </div>
    );
}
