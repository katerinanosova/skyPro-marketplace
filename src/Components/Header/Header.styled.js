import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #009ee4;

  @media screen and (max-width: 590px) {
    // display: none;
  }
`;
export const HeaderNav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;

  @media screen and (max-width: 590px) {
    height: 55px;
    justify-content: start;
    padding: 0 17px;
  }
`;

export const HeaderButton = styled.button`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }

  @media screen and (max-width: 590px) {
    display: none;
  }
`;
export const HeaderButtonSecond = styled(HeaderButton)`
  width: 173px;
  margin-left: 10px;

  @media screen and (max-width: 590px) {
    display: none;
  }
`;
