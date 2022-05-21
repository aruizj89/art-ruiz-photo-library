import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export const LazyImage = ({ photo }) => {
  const { height, width, urls } = photo;
  const [loaded, setLoaded] = useState(false);
  const [renderHeight, setRenderHeight] = useState(0);

  useEffect(() => {
    const { full } = urls;

    const fullImage = new Image();

    fullImage.src = full;

    fullImage.onload = () => setLoaded(true);
  }, [setLoaded, urls]);

  const url = useMemo(() => (loaded ? urls.full : urls.thumb), [loaded, urls]);

  const setHeight = useCallback(
    (node) => {
      if (node)
        setRenderHeight((node.getBoundingClientRect().width * height) / width);
    },
    [height, width]
  );

  return (
    <Images
      blurred={!loaded}
      ref={setHeight}
      height={renderHeight}
      url={`url("${url}")`}
    />
  );
};

const Images = styled.div`
  background-image: ${({ url }) => url};
  background-size: cover;
  border-radius: 8px;
  ${({ blurred }) => blurred && "filter: blur(4px);"}
  height: ${({ height }) => height}px;
`;
