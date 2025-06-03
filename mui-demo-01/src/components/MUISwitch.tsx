import { Box, FormControlLabel, Switch } from "@mui/material"
import { useState } from "react"

const MUISwitch = () => {

    const [theme, setTheme] = useState('Light');
    const [check, setCheck] = useState(false);

    console.log({check,});
    console.log({theme,});

    const handleThemeChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setCheck(event.target.checked);
        setTheme(event.target.checked ? 'Dark' : 'Light');
    }

  return (
    <Box>
        <FormControlLabel
            label={`${theme} Mode`}
            control={<Switch
                value={theme}
                checked={check}
                onChange={handleThemeChange}
                color="success"
            />}
        />
    </Box>
  )
}

export default MUISwitch