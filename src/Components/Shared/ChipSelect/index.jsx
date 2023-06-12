import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import languageList from "../../../helper/languageList";
import AvatarList from "../AvatarList";
export default function ChipSelect({ project, setProject }) {
  const [toolsList, setToolsList] = useState();
  return (
    <>
      <Autocomplete
        multiple
        id="multiple-limit-tags"
        options={languageList}
        getOptionLabel={(option) => option.name}
        defaultValue={project.tools}
        onChange={(event, newValue) => {
          setProject((prevState) => ({ ...prevState, tools: newValue }));
        }}
        renderInput={(params) => (
          <TextField {...params} label="Language" placeholder="Language" />
        )}
      />
      <AvatarList toolsList={project.tools} />
    </>
  );
}
