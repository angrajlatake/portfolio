import React from "react";
import ProjectCard from "./ProjectCard";
import { projectList } from "../Projects/ProjectList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
const ProjectsList = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={12}
        sx={{ paddingBottom: 3 }}
      >
        <Typography variant="h4" color="primary">
          Projects
        </Typography>
        <Button variant="contained" startIcon={<Add />}>
          Add
        </Button>
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {projectList.map((project, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProjectsList;
