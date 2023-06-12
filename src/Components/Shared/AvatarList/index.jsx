import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
const AvatarList = ({ toolsList }) => {
  return (
    <div>
      {toolsList && (
        <AvatarGroup style={{ alignSelf: "center" }}>
          {toolsList.map((tool, index) => (
            <Avatar
              key={index}
              variant="square"
              alt="Remy Sharp"
              sx={{ width: 56, height: 56 }}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool.name}/${tool.name}-${tool.versions.svg[0]}.svg`}
            />
          ))}
        </AvatarGroup>
      )}
    </div>
  );
};

export default AvatarList;
