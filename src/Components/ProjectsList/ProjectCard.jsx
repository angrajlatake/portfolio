import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { GitHub } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import { Link } from "react-router-dom";
import AvatarList from "../Shared/AvatarList";

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card sx={{ minWidth: 275, minHeight: 230 }}>
      <CardHeader
        action={
          <Link to={`./${project.id}`} aria-label="settings">
            <EditRoundedIcon />
          </Link>
        }
        title={project?.title}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Last Commit:
        </Typography>
        <AvatarList toolsList={project.tools} />
      </CardContent>
      <CardActions disableSpacing>
        <a href={`${project.link}`} target="_blank" rel="noreferrer">
          <IconButton aria-label="Link to project">
            <OpenInNewRoundedIcon />
          </IconButton>
        </a>
        <a href={`${project.repo}`} target="_blank" rel="noreferrer">
          <IconButton aria-label="Github">
            <GitHub />
          </IconButton>
        </a>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{project.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectCard;
