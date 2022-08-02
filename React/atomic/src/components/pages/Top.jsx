import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { useContext } from "react";
export const Top = () => {
  const histry = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    histry.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    histry.push("/users");
  };

  return (
    <SContainer>
      <h2>Top page</h2>
      <SecondaryButton onClick={onClickAdmin}>Admins</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>General</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
