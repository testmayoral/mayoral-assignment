import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  margin: 0 auto;
  width: 4rem;
  height: 2rem;
  margin-top: 1rem;
  background-color: #3471c3;
  color: white;
  border-radius: 4px;
`;

const Button = ({ text, onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
