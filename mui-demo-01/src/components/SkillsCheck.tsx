import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import React, { useState } from "react"

const SkillsCheck = () => {

    const [skills, setSkills] = useState<string[]>([]);
    console.log({skills,});

    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value));
        }
    }

  return (
    <Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        label="React"
                        value='react'
                        control={<Checkbox onChange={handleSkillsChange}/>}
                    />
                    <FormControlLabel
                        label="Next js"
                        value='nextjs'
                        control={<Checkbox onChange={handleSkillsChange}/>}
                    />
                    <FormControlLabel
                        label="Flutter"
                        value='flutter'
                        control={<Checkbox onChange={handleSkillsChange}/>}
                    />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default SkillsCheck