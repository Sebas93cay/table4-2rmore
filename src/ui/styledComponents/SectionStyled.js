import styled from 'styled-components';

export const SectionS = styled.div`
  margin-block-start: 1.5rem;
  margin-block-end: 6rem;
`;

export const SectionHeaderS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 2rem;
`;

export const TitledSectionS = styled(SectionS)`
  display: flex;
  flex-direction: column;
`;
