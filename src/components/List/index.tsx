import React, { useState, useEffect } from 'react';
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
  const [filteredData, setFilteredData] = useState({});
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    const { data } = response;
    const newData =
      data?.filter(({ name }) => {
        return name?.toLowerCase().includes(inputValue?.toLowerCase());
      }) || [];

    if (!inputValue) {
      setFilteredData(response);
    } else {
      setFilteredData({ data: newData, totalItems: newData.length });
    }
  }, [response, inputValue]);

  return (
    <Container>
      <SearchBar placeholder="Buscar" setInputValue={setInputValue} />
      <ListStyled>
        {filteredData?.totalItems > 0 ? (
          filteredData?.data?.map((item, index) => <Card key={index} {...item} />)
        ) : (
          <div>No hay elementos que coincidan</div>
        )}
      </ListStyled>
    </Container>
  );
};

export default List;
