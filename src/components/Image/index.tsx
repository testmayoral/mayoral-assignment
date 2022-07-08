import React from 'react';
import styled from 'styled-components';

const ImageStyled = styled.img`
  height: 10rem;
  width: 202px;
  margin: 0 auto;
  object-fit: contain;
`;

const Image = ({ src, alt }) => (
    <ImageStyled src={src} alt={alt} />
);

export default Image;
