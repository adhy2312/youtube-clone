import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const VideoCard = ({ video }) => {
  const { videoId } = video.id;
  const { title, thumbnails, channelTitle } = video.snippet;

  return (
    <Card sx={{ width: 300 }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={thumbnails.high.url}
          alt={title}
          sx={{ height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px" }}>
        <Link to={`/video/${videoId}`} style={{ color: "white", textDecoration: "none" }}>
          <Typography variant="subtitle1" fontWeight="bold">{title.slice(0, 50)}</Typography>
        </Link>
        <Typography variant="subtitle2" color="gray">{channelTitle}</Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
