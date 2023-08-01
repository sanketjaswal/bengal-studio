import styled from "styled-components";

export const Text = styled.section`
  color: rgba(255, 255, 255, 0.8);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

export const SubTextHead = styled(Text)`
  font-family: Orbitron;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
`;

export const TabHead = styled(Text)`
  font-family: Orbitron;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  text-align: left;
`;

export const SmallHeading = styled(Text)`
  font-family: Orbitron;
  font-size: 35px;
  font-weight: 600;
  line-height: normal;
`;

export const FancySmallHeading = styled(SmallHeading)`
  background: var(--2, linear-gradient(158deg, #f86cf8 0%, #64cef5 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const BigHeadingText = styled(Text)`
  font-family: Orbitron;
  font-size: 45px;
  font-weight: 600;
  line-height: 68px;
`;

export const FancyBigHeading = styled(Text)`
  font-family: Orbitron;
  font-size: 55px;
  font-weight: 700;
  line-height: 72px;
  width: 363px;
  height: 72px;
  top: 66px;
  left: 102px;
  position: absolute;
  background: var(--2, linear-gradient(158deg, #f86cf8 0%, #64cef5 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
