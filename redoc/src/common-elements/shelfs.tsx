import * as React from 'react';
import styled from '../styled-components';

const directionMap = {
  left: '90deg',
  right: '-90deg',
  up: '-180deg',
  down: '0',
};

class IntShelfIcon extends React.PureComponent<{
  className?: string;
  float?: 'left' | 'right';
  size?: string;
  color?: string;
  direction: 'left' | 'right' | 'up' | 'down';
  style?: React.CSSProperties;
}> {
  render() {
    return (
      <svg
        className={this.props.className}
        style={this.props.style}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="11px" 
        height="6.3px" 
        viewBox="0 0 11 6.3"
      >
       <path d="M0,0.5c0-0.1,0.1-0.3,0.2-0.4c0.2-0.2,0.5-0.2,0.7,0L5.5,5l4.6-4.9c0.2-0.2,0.5-0.2,0.7,0c0.2,0.2,0.2,0.5,0,0.7l-5,5.3C5.8,6.2,5.6,6.3,5.5,6.3S5.2,6.2,5.1,6.1l-5-5.3C0,0.7,0,0.6,0,0.5z"/>
      </svg>

    );
  }
}

export const ShelfIcon = styled(IntShelfIcon)`
  height: ${props => props.size || '18px'};
  width: ${props => props.size || '18px'};
  vertical-align: middle;
  float: ${props => props.float || ''};
  transition: transform 0.2s ease-out;
  transform: rotateZ(${props => directionMap[props.direction || 'down']});

  polygon {
    fill: ${({ color, theme }) =>
    (color && theme.colors.responses[color] && theme.colors.responses[color].color) || color};
  }
`;

export const Badge = styled.span<{ type: string }>`
  display: inline-block;
  padding: 2px 8px;
  margin: 0;
  background-color: ${props => props.theme.colors[props.type].main};
  color: ${props => props.theme.colors[props.type].contrastText};
  font-size: ${props => props.theme.typography.code.fontSize};
  vertical-align: middle;
  line-height: 1.6;
  border-radius: 4px;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: 12px;
  + span[type] {
    margin-left: 4px;
  }
`;
