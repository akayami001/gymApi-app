import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Typography } from "@mui/material";

//import { exerciseOptions, fetchData } from '../utils/fetchData';
//import HorizontalScrollbar from './HorizontalScrollbar';
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const SearchContainer = styled.div`
  
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  border-radius: 10px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: crimson;
  color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
`;

const SearchExercises = ({}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const handleSearch = async () => {};

  return (
    <Container>
      <Wrapper>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="49px"
          textAlign="center"
        >
          Awesome Exercises <br /> You Should Know
        </Typography>
        <SearchContainer position="relative" mb="72px">
          <Input
            height="76px"
            
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button className="search-btn" onClick={handleSearch}>
            Search
          </Button>
        </SearchContainer>
      </Wrapper>
    </Container>
  );
};

export default SearchExercises;
