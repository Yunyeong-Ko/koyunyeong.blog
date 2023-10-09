import styled from "@emotion/styled";
import { Link } from "gatsby";

const Logo = () => {
  return <StyledLogo to="/">고윤영 블로그</StyledLogo>;
};

export default Logo;

const StyledLogo = styled(Link)`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
