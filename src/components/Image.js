import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";

export const LazyImage = ({ photo }) => {
  const {
    alt,
    height,
    width,
    urls: { full, thumb },
  } = photo;
  const [loading, setLoading] = useState(true);
  const [renderHeight, setRenderHeight] = useState(0);

  const onLoad = useCallback(() => setLoading(false), [setLoading]);

  const setHeight = useCallback(
    (node) => {
      if (node)
        setRenderHeight((node.getBoundingClientRect().width * height) / width);
    },
    [height, width]
  );

  if (loading)
    return (
      <Images ref={setHeight} style={{ height: renderHeight }}>
        <BlurredImage src={thumb} alt={alt} />
        <HiddenImage src={full} alt={alt} onLoad={onLoad} />
      </Images>
    );

  return (
    <Images>
      <img src={full} alt={alt} />
    </Images>
  );
};

const BlurredImage = styled.img`
  filter: blur(8px);
  position: absolute;
`;

const HiddenImage = styled.img`
  opacity: 0;
`;

const Images = styled.div`
  & img {
    border-radius: 8px;
    width: 100%;
  }
`;
