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
      color: ${props => props.theme.colors.text.primary};
      background: ${({ theme }) => theme.rightPanel.textColor};
      margin-top: 1rem;
     
      &:focus, &:active {
          outline: auto;
        }
`;