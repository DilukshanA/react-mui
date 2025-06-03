import { Stack, Button, IconButton, ButtonGroup } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const MUIButton = () => {
  return (
    <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
            <Button variant="text" href="https://google.com">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
        </Stack>
        <Stack display={"block"} direction="row" spacing={2}>
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="medium">Medium</Button>
            <Button variant="contained" size="large">Large</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
            <Button variant="contained">Send<SendIcon/></Button>
            <Button variant="contained" startIcon={<SendIcon/>} disableRipple>Send</Button>
            <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton aria-label="send" color="success" size="small">
                <SendIcon/>
            </IconButton>
        </Stack>
        <Stack direction={"row"}>
            <ButtonGroup variant="contained" aria-label="contained button group"
                orientation="vertical" size="small" color="secondary">
                <Button onClick={() => alert("left")}>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MUIButton