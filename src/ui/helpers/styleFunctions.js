export const headerHovers = (props) => `
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    transition: 0.3s;
    background: ${props.theme.hoverLinksColor};
  }
`;
