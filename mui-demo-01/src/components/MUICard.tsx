import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const MUICard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardContent>
                <CardMedia
                component={"img"}
                    sx={{ height: 140 }}
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="unplash image"
                />
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" sx={{color: "text.secondary"}}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MUICard