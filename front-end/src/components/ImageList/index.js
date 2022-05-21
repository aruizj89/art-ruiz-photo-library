import { Masonry } from "@mui/lab";
import { Container } from "@mui/material";
import React, { useMemo } from "react";
import { useShellContext } from "SHELL/ShellContext";
import { LazyImage } from "./LazyImage";

export const ImageList = ({ photos }) => {
  const { smallViewport } = useShellContext();

  const cols = useMemo(() => (smallViewport ? 2 : 3), [smallViewport]);

  return (
    <Container sx={{ pt: 3 }}>
      <Masonry columns={cols} spacing={3}>
        {photos.map((photo) => (
          <LazyImage key={photo.id} photo={photo} />
        ))}
      </Masonry>
    </Container>
  );
};
