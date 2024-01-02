import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;
export const SettingsImgInput = styled.input`
  display: none;
  cursor: pointer;
`;

export const Main = styled.main``;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
  font-family: 'Roboto', sans-serif;

  @media screen and (max-width: 890px) {
    padding: 85px 0px 84px;
  }

  @media screen and (max-width: 590px) {
    padding: 85px 0px 84px;
  }
`;

export const MainCenterBlock = styled.div`
  @media screen and (max-width: 890px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
  }
`;

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: 600px) {
    padding: 0 0 40px;
  }
`;

export const ProfileContent = styled.div`
  max-width: 834px;
  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;

export const ProfileTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 1;
  }
`;

export const ProfileSettings = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 890px) {
    flex-wrap: wrap;
  }
`;

export const SettingsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 43px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;

export const SettingsImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  @media screen and (max-width: 600px) {
    width: 132px;
    height: 132px;
  }
`;

export const SettingsImgLink = styled.a``;

export const SettingsImgImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: 600px) {
    width: 132px;
    height: 132px;
  }
`;

export const SettingsChangePhoto = styled.a`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`;

export const SettingsRight = styled.div`
  width: 564px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SettingsDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;

  @media screen and (max-width: 600px) {
    margin: 0 0px 18px;
  }
`;

export const SettingsNameBox = styled.div`
  display: flex;

  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;
export const SettingsForm = styled.div`
  width: 564px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const SettingsInput = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  @media screen and (max-width: 600px) {
    border-radius: 30px;
    padding: 9px 17px;
  }
`;

export const SettingsLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 6px;
  }
`;

export const SettingsFName = styled(SettingsInput)`
  width: 300px;

  @media screen and (max-width: 890px) {
    width: 500px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SettingsLName = styled(SettingsInput)`
  width: 300px;

  @media screen and (max-width: 890px) {
    width: 500px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SettingsCity = styled(SettingsInput)`
  width: 300px;

  @media screen and (max-width: 890px) {
    width: 500px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SettingsPhone = styled(SettingsInput)`
  width: 614px;

  @media screen and (max-width: 890px) {
    width: 500px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SettingsButton = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
`;

export const MainTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ContentCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 441px;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }

  @media screen and (max-width: 1158px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 890px) {
    width: 600px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    max-width: 550px;
    padding-left: 16px;
    padding-right: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 10px;
    grid-auto-rows: auto;
    justify-content: center;
    height: 100%;
  }
`;
