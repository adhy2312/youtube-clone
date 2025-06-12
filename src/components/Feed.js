import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchAPI";
import Videos from "./Videos";

const Feed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI("search?part=snippet&q=reactjs")
      .then(data => setVideos(data.items));
  }, []);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", color: "white" }}>
      <Typography variant="h4" mb={2}>Recommended Videos</Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;
