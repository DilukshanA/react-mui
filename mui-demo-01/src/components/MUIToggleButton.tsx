import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material"
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from "react";

const MUIToggleButton = () => {
    const [formats, setFormats] = useState<string | null>(null);

    console.log({formats,});

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, 
        updateFormat: string | null
    ) => {
        setFormats(updateFormat);
    }

  return (
    <Stack spacing={2}>
        <Stack direction={"row"}>
            <ToggleButtonGroup aria-label="text formatting" value={formats}
            color="success" exclusive
            onChange={handleFormatChange}>
                <ToggleButton value={"bold"} aria-label="bold">
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value={"italic"} aria-label="italic">
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value={"underline"} aria-label="underline">
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MUIToggleButton