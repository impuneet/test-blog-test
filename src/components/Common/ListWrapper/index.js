import styled from 'styled-components';

const ListWrapper = styled.section`
  margin: auto;
  max-width: 800px;
  font-size: 0;
  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  h1 {
    margin: .67em 0;
    font-size: 32px;
  }

  time {
    margin: 1em 0;
    font-size: 14px;
  }
`;

export default ListWrapper;
