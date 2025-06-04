import { Rating, Stack } from "@mui/material"
import React, { useState } from "react"

const MUIRattings = () => {

    const [value, setValue] = useState<number | null>(null);

    const handleChange = (_event : React.ChangeEvent<{}>) => {
        setValue(3)
    }

  return (
    <Stack>
        <Rating value={value} onChange={handleChange}/>
    </Stack>
  )
}

export default MUIRattings