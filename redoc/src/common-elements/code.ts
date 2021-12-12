import styled from '../styled-components';
import { darken } from 'polished';

export const CodeArea = styled.textarea`
      padding: 10px 20px;
      outline: none;
      border: 1px solid ${({ theme }) => darken(0.05, theme.codeBlock.backgroundColor)};
      border-radius: 5px;
      min-width: 60px;
      font-size: 0.9em;
      width: 100%;
      line-height: 1.6em;
      color: ${({ theme }) => theme.rightPanelInner.codeBlockText};
      background: ${({ theme }) => theme.rightPanelInner.codeBlock};
     
      &:focus, &:active {
          outline: auto;
        }
`;