import React from 'react';
import { components } from 'react-select';
import { Scrollbar } from 'smooth-scrollbar-react';
import { IconArrowDown, IconClose } from "../Icon"

const { Option, SingleValue, MenuList } = components;

export const customSingleValue = (props) => (
  <SingleValue {...props}>
    {props.data.icon && props.data.icon}
    {props.data.label}
  </SingleValue>
);

export const customOptionValue = (props) => (
  <Option {...props}>
    {props.data.icon}
    {props.data.label}
  </Option>
);

export const scrollBar = (props) => {
  return (
    <MenuList {...props}>
      <Scrollbar style={{ maxHeight: 300 }} alwaysShowTracks={true}>
        {props.children}
      </Scrollbar>
    </MenuList>
  );
};

export const DropdownIndicator = (props) => {
  const { selectProps } = props

  return (
    <components.DropdownIndicator {...props}>
      <IconArrowDown style={{width: "13px"}} />
    </components.DropdownIndicator>
  );
};

export const ClearIndicator = (props) => {
  const { selectProps } = props

  return (
    <components.ClearIndicator {...props}>
      <IconClose style={{width: "11px"}} />
    </components.ClearIndicator>
  );
};


