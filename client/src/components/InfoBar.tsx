import styled from 'styled-components';

import closeIcon from '../assets/icons/closeIcon.png';
import onlineIcon from '../assets/icons/onlineIcon.png';

const InfoBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`;

const LeftInnerContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
`;

const RightInnerContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`;

const OnlineIcon = styled.img`
  margin-right: 5%;
`;

type Props = {
  room: string;
};

function InfoBar({room}: Props) {
  return (
    <InfoBarContainer>
      <LeftInnerContainer>
        <OnlineIcon src={onlineIcon} alt="Online icon" />
        <h3>{room}</h3>
      </LeftInnerContainer>
      <RightInnerContainer>
        <a href="/">
          <img src={closeIcon} alt="Close icon" />
        </a>
      </RightInnerContainer>
    </InfoBarContainer>
  );
}

export default InfoBar;
