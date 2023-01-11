import styled from "styled-components";
import { options } from "../data";
import { mobile } from "../responsive";
import OptionItem from "./OptionItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Membership = () => {
  return (
    <Container>
      {options.map((item) => (
        <OptionItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Membership;