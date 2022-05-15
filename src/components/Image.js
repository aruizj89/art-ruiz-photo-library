import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";

export const LazyImage = ({ alt, src, thumb, ...rest }) => {
  const [loading, setLoading] = useState(true);

  const onLoad = useCallback(() => setLoading(false), [setLoading]);

  if (loading)
    return (
      <Images>
        <BlurredImage {...rest} src={thumb} alt={alt} />
        <HiddenImage {...rest} src={src} alt={alt} onLoad={onLoad} />
      </Images>
    );

  return (
    <Images>
      <img {...rest} src={src} alt={alt} />
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
  }
`;
