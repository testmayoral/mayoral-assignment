import React from 'react';
import styled from 'styled-components';

import Card from 'components/Card';
import SearchBar from 'components/SearchBar';
import { useClothing } from 'hooks/useClothing';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListStyled = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const List = () => {
  const { clothingData: response, error, loading } = useClothing();
  const { data, totalItems } = response;

  return (
    <Container>
      <SearchBar placeholder="Buscar" />
      <ListStyled>
        {totalItems > 0 &&
          data.map((item, index) => (
            <Card
              key={index}
              {...item}
            />
          ))}
      </ListStyled>
    </Container>
  );
};

export default List;
