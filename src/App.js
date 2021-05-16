import styled from 'styled-components';
import {StyledLink} from './components/Link';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


function App() {
  return (
    <Wrapper>
     <Title>
       Hello World!
     </Title>
    <Button>Norma Button</Button>
    <Button primary>Primary Button</Button>
    <StyledLink>Styled, exciting Link</StyledLink>
  </Wrapper>
  );
}

export default App;
