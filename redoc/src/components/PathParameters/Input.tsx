import * as React from 'react';
import { FunctionComponent } from 'react';
import { InputContainer, InputLabel, Input, InputDescription, Select, Option } from "./styled.elements"
import { l } from '../../services/Labels';

interface componentInterface {
  data: any;
  onChange?: (e: any) => void;
  fieldType?: string;
}

const PathParameters: FunctionComponent<componentInterface> = ({ data, onChange, fieldType }) => {
  fieldType
  const { name, description, required, schema, type, format } = data

  const onInputChange = (e) => {
    if (onChange) onChange(e)
  }

  const getType = () => {
    switch (format || schema?.type) {
      case "binary":
        return { type: "file" }
      default:
        return { type: "text" }
    }
  }

  const renderType = () => {
    if (format && format === "binary") {
      return l("file")
    } else {
      return type ? `${type}${format ? ` - ${format}` : ""}` : `${schema.type}${schema.type == "array" ? ` - ${schema.items.type}` : ""}${schema.format ? ` - ${schema.format}` : ""}`
    }
  }

  const isNotSingle = () => {
    return schema?.type == "array" && schema?.items?.enum?.length
  }

  return (
    <InputContainer >
      <InputLabel>{name} <span>({renderType()})</span> <span>({fieldType})</span> {required ? <span className='required'>* {l('required')}</span> : ""}</InputLabel>
      <InputDescription>{description}</InputDescription>
      {isNotSingle() ?
        <Select name={`${name}_${fieldType}`} multiple>
          {schema.items.enum.map((item, i) => (
            <Option key={`op-${i}`}>{item}</Option>
          ))}
        </Select>
        :
        <Input
          {...getType()}
          name={`${name}_${fieldType}`}
          placeholder={name}
          onChange={onInputChange}
        />
      }

    </InputContainer>
  );
}


export default PathParameters