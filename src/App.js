import { Container } from "@mui/material";
import React from "react";
import { ImageList } from "./components/ImageList";
import photos from "./photos.json";

const App = () => {
  return (
    <Container sx={{ pt: 3 }}>
      <ImageList photos={photos} />
    </Container>
  );
};

export default App;
