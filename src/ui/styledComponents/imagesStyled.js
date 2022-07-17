import styled from 'styled-components';

export const ImageS = styled.img`
  max-width: 100%;
`;

export const ProfileImageS = styled(ImageS)`
  border-radius: 50%;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const ProfileImageContainerS = styled.div`
  height: ${(props) => props.width + 'px'};
  width: ${(props) => props.width + 'px'};
  max-height: 400px;
  max-width: 400px;
`;
