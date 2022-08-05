import styled from "styled-components";
import { BaseButton } from "./BaseButon";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

//既に作成しているstyledが存在する場合、styled(component)``で追加記述を書ける
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
