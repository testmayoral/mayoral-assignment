import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Image from 'components/Image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 450px;
  border: 1px solid #2596be;
  margin-right: 1rem;
  box-sizing: border-box;
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
  text-decoration: ${({ hasLine }) => (hasLine ? 'line-through' : 'none')};
`;

const NewPriceTag = styled.div`
  text-align: center;
  color: red;
`;

const Label = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const Card = ({ name, price, newPrice, currency, imageUrl, discount }) => {
  const hasDiscount = discount ? true : false;

  return (
    <Container>
      <Image src={imageUrl} alt="" />
      <NameTag>{name}</NameTag>
      <PriceTag hasLine={hasDiscount}>
        {price} {currency}
      </PriceTag>
      {hasDiscount && (
        <NewPriceTag>
          {newPrice} {currency}(-{discount})
        </NewPriceTag>
      )}
      <Label>más colores</Label>
      <Button
        text="Añadir"
        onClick={() => {
          console.log('hola');
        }}
      />
    </Container>
  );
};

export default Card;
