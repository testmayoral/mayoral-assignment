import React from 'react';
import { orderBy } from 'lodash';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  margin: 0 auto;
  width: 4rem;
  height: 2rem;
  margin-top: 1rem;
  border-radius: 4px;
`;

const SortButton = ({ text, clothing, setFilteredData }) => {
  const handleOnClick = () => {
    const sortOrder = text === '-' ? 'desc' : 'asc';
    const newData = orderBy(clothing.data, ['newPrice'], [sortOrder]);

    setFilteredData({ data: newData, totalItems: newData.length });
  };

  return <ButtonStyled onClick={handleOnClick}>{text}</ButtonStyled>;
};

export default SortButton;
