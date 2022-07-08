import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Image from 'components/Image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 242px;
  height: 400px;
  border: 1px solid #2596be;
`;

const NameTag = styled.div`
  margin: 0 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 202px;
  margin-top: 1rem;
`;

const PriceTag = styled.div`
  text-align: center;
  margin: 2rem 0.5rem 0.5rem 0.5rem;
`;

const NewPriceTag = styled.div`
  text-align: center;
  color: red;
`;

const Label = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const Card = ({ name, price, newPrice, currency, imageUrl  }) => {
  return (
    <Container>
      <Image src={imageUrl} alt="" />
      <NameTag>{name}</NameTag>
      <PriceTag>{price} {currency}</PriceTag>
      <NewPriceTag>{newPrice}</NewPriceTag>
      <Label>más colores</Label>
      <Button text='Añadir' onClick={() => {console.log("hola")}} />
    </Container>
  );
};

export default Card;
