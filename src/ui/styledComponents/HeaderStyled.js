import styled from 'styled-components';

export const HeaderS = styled.header`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.header};
  padding: 10px 30px;
`;
