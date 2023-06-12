import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Add, PhotoCamera, SaveAltRounded } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { projectList } from "../Projects/ProjectList";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChipSelect from "../Shared/ChipSelect";

const ProjectEditor = () => {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();
  useEffect(() => {
    setProject(projectList[projectId]);
  }, [projectId]);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    projectList[projectId] = project;
  };
  return (
    <div>
      {project && (
        <Stack gap={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={12}
            sx={{ paddingBottom: 3 }}
          >
            <Typography variant="h4" color="primary">
              Edit Project
            </Typography>
            <Button
              variant="contained"
              startIcon={<SaveAltRounded />}
              onClick={handleSave}
            >
              Save
            </Button>
          </Stack>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={project.title}
            name="title"
            onChange={handleChange}
          />
          <ChipSelect project={project} setProject={setProject} />
          <TextField
            id="outlined-basic"
            label="Description"
            multiline
            rows={3}
            variant="outlined"
            value={project.description}
            name="description"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Project Link"
            variant="outlined"
            value={project.link}
            name="link"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Github"
            variant="outlined"
            value={project.repo}
            name="repo"
            onChange={handleChange}
          />
          <Button variant="outlined" startIcon={<PhotoCamera />}>
            Upload Image
          </Button>
        </Stack>
      )}
    </div>
  );
};

export default ProjectEditor;
