import { Rating, Stack } from "@mui/material"
import React, { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MUIRattings = () => {

    const [value, setValue] = useState<number | null>(null);

    console.log("Rating value: ", value);

    const handleChange = (_event : React.ChangeEvent<{}>, newValue : number | null) => {
        //console.log("Rating changed:", newValue);
        setValue(newValue);
    }

  return (
    <Stack>
        <Rating 
          value={value} 
          onChange={handleChange}
          precision={0.5}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error"/>}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
        />
        <Rating 
          value={3.5}
          precision={0.5}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error"/>}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
          readOnly
        />
        <Rating 
          value={value} 
          onChange={handleChange}
          precision={0.5}
          size="large"
          highlightSelectedOnly
        />
    </Stack>
  )
}

export default MUIRattings