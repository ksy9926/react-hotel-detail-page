import styled, { css } from 'styled-components';

const Div = styled.div``;
const Ul = styled.ul``;
const Li = styled.li``;

const Input = styled.input`
  ${(props) =>
    props.complete &&
    css`
      text-decoration-line: line-through;
    `}
`;

const Button = styled.button`
  ${(props) => {
    if (props.toggle === '진행중')
      return css`
        color: green;
      `;
    else if (props.toggle === '끝')
      return css`
        color: red;
      `;
  }}
`;

const CompleteButton = styled.button`
  ${(props) =>
    props.toggle &&
    css`
      color: red;
    `}
`;

const OnProgressButton = styled.button`
  ${(props) =>
    props.toggle &&
    css`
      color: green;
    `}
`;

const Span = styled.span``;

export { Div, Ul, Li, Input, Button, Span, CompleteButton, OnProgressButton };
