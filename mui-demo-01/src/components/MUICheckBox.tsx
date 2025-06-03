import { Box, Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'

const MUICheckBox = () => {

    const [acceptTnC, setAcceptTnC] = useState(false);

    console.log({acceptTnC,});

    const HandleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
    }

  return (
    <Box>
        <Box>
            <FormControlLabel
                label="I accept terms and conditions"
                control={<Checkbox checked={acceptTnC} onChange={HandleChange}/>}
            />
        </Box>
    </Box>
  )
}

export default MUICheckBox