import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setVideoDetail(data.items[0]));
  }, [id]);

  if (!videoDetail) return <div>Loading...</div>;

  return (
    <div style={{ color: "white" }}>
      <h1>{videoDetail.snippet.title}</h1>
      <p>{videoDetail.snippet.channelTitle}</p>
    </div>
  );
};

export default VideoDetail;
