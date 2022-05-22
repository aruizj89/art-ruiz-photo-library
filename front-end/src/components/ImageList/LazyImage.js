import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export const LazyImage = ({ photo }) => {
  const {
    height,
    width,
    urls: { full, thumb },
  } = photo;
  const [renderHeight, setRenderHeight] = useState(0);
  const [fullUrl, setFullUrl] = useState("");
  const [thumbUrl, setThumbUrl] = useState("");

  useEffect(() => {
    const fullImage = new Image();

    fullImage.src = full;

    fullImage.onload = () => setFullUrl(full);
  }, [full, setFullUrl]);

  useEffect(() => {
    const thumbImage = new Image();

    thumbImage.src = thumb;

    thumbImage.onload = () => setThumbUrl(thumb);
  }, [thumb, setThumbUrl]);

  const url = useMemo(() => fullUrl || thumbUrl || "", [fullUrl, thumbUrl]);
  const loading = useMemo(() => !fullUrl, [fullUrl]);

  const setHeight = useCallback(
    (node) => {
      if (node)
        setRenderHeight((node.getBoundingClientRect().width * height) / width);
    },
    [height, width]
  );

  return (
    <Images ref={setHeight} height={renderHeight} url={`url("${url}")`}>
      {loading && (
        <Skeleton
          sx={{ height: renderHeight, borderRadius: 2 }}
          animation="wave"
          variant="rectangular"
        />
      )}
    </Images>
  );
};

const Images = styled.div`
  background-image: ${({ url }) => url};
  background-size: cover;
  border-radius: 8px;
  height: ${({ height }) => height}px;
`;
