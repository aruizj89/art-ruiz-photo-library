import { Container } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { ImageList } from "./components/ImageList";
import axios from "axios";

const App = () => {
  const [photos, setPhotos] = useState([]);

  const fetch = useCallback(
    () =>
      axios
        .post(
          "https://us-central1-art-ruiz-photo-library.cloudfunctions.net/api/unsplash/random",
          { count: 20 }
        )
        .then(({ data }) => setPhotos(data)),
    []
  );

  useEffect(() => {
    if (fetch) fetch();
  }, [fetch]);

  return (
    <Container sx={{ pt: 3 }}>
      <ImageList photos={photos} />
    </Container>
  );
};

export default App;
