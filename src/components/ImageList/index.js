import {
  Container,
  ImageList as MuiImageList,
  ImageListItem,
} from "@mui/material";
import React, { useMemo } from "react";
import { useShellContext } from "SHELL/ShellContext";
import { LazyImage } from "./Image";

export const ImageList = ({ photos }) => {
  const { smallViewport } = useShellContext();

  const cols = useMemo(() => (smallViewport ? 2 : 3), [smallViewport]);

  return (
    <Container sx={{ pt: 3 }}>
      <MuiImageList cols={cols} gap={24} sx={{ m: 0 }} variant="masonry">
        {photos.map((photo) => (
          <ImageListItem key={photo.id} sx={{ width: "100%" }}>
            <LazyImage photo={photo} />
          </ImageListItem>
        ))}
      </MuiImageList>
    </Container>
  );
};
