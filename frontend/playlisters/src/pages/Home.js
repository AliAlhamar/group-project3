import React, { useEffect, useState } from "react";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("/userVideos");
      setVideos(res.data);
    };
    fetchVideos();
  }, []);

  return (
    <>
      <Container>
        {videos.map((video) => (
          <Card />
        ))}
      </Container>
    </>
  );
}

export default Home;
