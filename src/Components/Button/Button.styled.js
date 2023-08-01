import styled from "styled-components";

export const NormalButton = styled.section`
  display: flex;
  width: 173px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid white;
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const FancyButton = styled(NormalButton)`
  background: var(--3, linear-gradient(158deg, #d10ed1 0%, #10a3da 100%));
  border: 0px;
`;

export const NormalButtonSmall = styled(NormalButton)`
  width: 103px auto;
  height: 36px;
  margin: 10px;
  font-size: 17px;
`;
export const FancyButtonSmall = styled(FancyButton)`
  width: 103px;
  height: 36px;
  font-size: 17px;
  margin-block: 10px;
`;
