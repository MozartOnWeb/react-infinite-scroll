// Import Styled Cpmponents
import styled from "styled-components";

// Import BreakPoint
import {down} from "styled-breakpoints"

export const Header = styled.div`
  width: 80vw;
  text-align: center;
  margin: 50px auto;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 22px;
  text-transform: uppercase;
  margin-bottom: 10px;
  ${down('sm')} {
  font-size: 18px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 300;
  ${down('sm')} {
  font-size: 14px;
  }
`;
