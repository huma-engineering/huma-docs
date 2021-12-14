import * as React from 'react';
import styled from '../../styled-components';

import { Spinner } from './Spinner.svg';

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export interface LoadingProps {
  color: string;
  style?: any
}

export class LoadingSimple extends React.PureComponent<LoadingProps> {
  render() {
    return (
      <LoadingContainer style={{...this.props.style}}>
        <Spinner color={this.props.color} />
      </LoadingContainer>
    );
  }
}
