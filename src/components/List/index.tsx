import React from 'react';
import styled from 'styled-components';

import Card from 'components/Card';
import { useClothing } from 'hooks/useClothing';

const ListStyled = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: center;
`;

const List = () => {
  const { clothingData: response, error, loading } = useClothing();
  const { data, totalItems } = response;

  return (
    <ListStyled>
      {totalItems > 0 &&
        data.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            newPrice={item.newPrice}
            currency={item.currency}
          />
        ))}
    </ListStyled>
  );
};

export default List;
