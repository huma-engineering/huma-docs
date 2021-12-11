import styled from '../styled-components';
import { darken } from 'polished';

export const RightPanelButton = styled.button`
      padding: 10px 20px;
      display: inline-block;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      cursor: pointer;
      text-align: center;
      outline: none;
      border: 1px solid ${({ theme }) => darken(0.05, theme.codeBlock.backgroundColor)};
      border-radius: 5px;
      min-width: 60px;
      font-size: 0.9em;
      font-weight: bold;
      width: 100%;
      color: ${props => props.theme.colors.text.primary};
      background: ${({ theme }) => theme.rightPanel.textColor};

      &.primary {
        background: ${({ theme }) => theme.typography.code.backgroundColor};
      }
     
      &:focus, &:active {
          outline: auto;
        }
`;