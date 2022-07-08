import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 400px;
  margin: 1rem 0 2rem 0;
  height: 24px;
  border: 1px solid #8080808f;
  border-radius: 6px;
  outline: none;
`;

const SearchBar = ({ placeholder }) => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (<Input placeholder={placeholder} onChange={(e) => handleOnChange(e)} />)
};

export default SearchBar;
