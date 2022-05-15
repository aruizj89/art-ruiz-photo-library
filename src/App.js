import { Container, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { LazyImage } from "./components/Image";
import photos from "./photos.json";

const App = () => {
  return (
    <Container sx={{ pt: 3 }}>
      <ImageList cols={3} gap={24} sx={{ m: 0 }} variant="masonry">
        {photos.map((photo) => (
          <ImageListItem key={photo.id} sx={{ width: "100%" }}>
            <LazyImage
              alt={photo.alt}
              src={photo.urls.full}
              style={{ width: "100%" }}
              thumb={photo.urls.thumb}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default App;
