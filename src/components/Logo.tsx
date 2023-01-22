import styled from 'styled-components';

const Logo: React.FC = () => {
  return (
    <Container>
      <h1>
                Ocean Report
      </h1>
    </Container>
  );
};
export default Logo;

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: white;
`;
