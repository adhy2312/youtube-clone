import React from "react";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => (
  <Box display="flex" flexWrap="wrap" gap={2}>
    {videos.map((item, idx) => (
      <VideoCard key={idx} video={item} />
    ))}
  </Box>
);

export default Videos;
