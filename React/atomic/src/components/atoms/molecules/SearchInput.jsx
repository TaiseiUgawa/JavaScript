import styled from "styled-components";
import { PrimaryButton } from "../button/PrimaryButton";
import { Input } from "../input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="search words" />
      <SButtonWrapper>
        <PrimaryButton>Search</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
