import { transparentize } from 'polished';
import styled from '../../styled-components';

export const InputContainer = styled.div`

`;

export const InputLabel = styled.label`
  font-size: 0.875rem;
  display: block;
  font-weight: 500;
  display: flex;
  align-items: center;

  span {
    display: block;
    font-size: 0.7rem;
    opacity: 0.5;
    margin-left: 0.5rem;
  }

  .required {
    color: ${({ theme }) => theme.colors.text.error};
    display: block;
    opacity: 1;
    font-size: 0.7rem;
  }
`;

export const Input = styled.input`
  padding: 0 1rem;
  border-radius: 4px;
  background-color: ${({ theme }) => transparentize(0.4, theme.rightPanel.backgroundColor)};
  font-size: 1rem;
  height: 36px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.light.main};

  &[type="file"]{
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const InputDescription = styled.div`
  font-size: 0.75rem;
  display: block;
  font-weight: 400;
  margin-bottom: 0.2rem;
  opacity: 0.5;
`;

export const Select = styled.select`
  background-color: ${({ theme }) => transparentize(0.4, theme.rightPanel.backgroundColor)};
  padding: 10px;
  width: 300px;
  max-width: 100%;
  border-radius: 5px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.light.main};

  option:focus,
  option:active,
  option:checked {
    background: ${({ theme }) => transparentize(0.8, theme.colors.light.main)};
    color: ${({ theme }) => theme.colors.light.main};
  }
`;

export const Option = styled.option`
  
`;


