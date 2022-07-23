import styled from 'styled-components';

const textWidthPercent = 55;

export const AboutContentS = styled.div`
  display: flex;
`;

export const AboutText = styled.div`
  width: ${textWidthPercent}%;
`;

export const AboutImageContainer = styled.div`
  width: ${100 - textWidthPercent}%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 1.5rem;
  padding-block: 4rem;
`;

export const AboutImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
