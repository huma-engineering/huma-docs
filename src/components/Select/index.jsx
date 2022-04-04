import React, { useEffect, useState } from 'react';
import {
  customSingleValue,
  customOptionValue,
  scrollBar,
  DropdownIndicator,
  ClearIndicator
} from './UiComponents';
import Select from "react-select"

const cDark = '#424347';
const cPrimary = '#f6f6f6';
const cPrimaryLight = '#E0F2FF';
const cPrimaryHover = '#f2f2f2';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    color: cDark,
    borderRadius: '20px',
    borderColor: "inherit",
    boxShadow: "none",

    "&&:hover": {
      borderColor: "inherit"
    }
  }),

  menu: (provided, state) => {

    return ({
      ...provided,
      marginBottom: 0,
      marginTop: 0,
      borderRadius: "8px",
      borderColor: "transparent",
      boxShadow: state.selectProps.menuIsOpen ? `0px 15px 31px rgba(60, 78, 100, 0.15)` : null,
    })
  },

  menuList: (provided, state) => ({
    ...provided,
    padding: 0,
    border: "none",
    borderRadius: "8px",
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    padding: '5px 12px'
  }),

  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: cPrimaryHover,
    borderRadius: "25px",
    paddingLeft: "4px",

    "&& > *": {
      height: "24px",
      display: "flex",
      alignItems: "center",
    },

    "&& > [role=button]": {
      cursor: "pointer",

      "&:hover": {
        backgroundColor: "transparent"
      }
    }
  }),

  input: (provided, state) => ({
    ...provided,
    margin: '0px',
    fontSize: "1rem",
    color: cDark,
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    marginRight: "5px",

    "&& > *": {
      color: cDark,
      paddingLeft: "2px"
    }
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: cDark,
    fontSize: "1rem",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? cPrimaryLight
          : isFocused
            ? cPrimaryHover
            : undefined,
      color: isDisabled
        ? cDark
        : isSelected
          ? cPrimary
          : cDark,

          "&&:active": {
            backgroundColor: "inherit"
          }
    };
  },
};

const SelectComp = (props) => {

  const [container, setContainer] = useState()

  useEffect(() => {
    setContainer(document.querySelector("body"))
  }, [])

  return <Select
    {...props}
    styles={customStyles}
    menuPortalTarget={container}
    components={{
      SingleValue: customSingleValue,
      Option: customOptionValue,
      MenuList: scrollBar,
      DropdownIndicator: DropdownIndicator,
      ClearIndicator: ClearIndicator,
      IndicatorSeparator: () => null
    }}
  />
}

export default SelectComp;