import * as React from 'react';
import { FunctionComponent } from 'react';
import Input from "./Input"


interface componentInterface {
  operationSpec: any;
  onChange?: () => void;
  onFormInit?: (e:HTMLFormElement) => void;
}

const PathParameters: FunctionComponent<componentInterface> = ({ operationSpec, onChange, onFormInit }) => {

  const { parameters } = operationSpec
  const content = operationSpec.requestBody?.content ? operationSpec.requestBody?.content : null

  const onInputChange = () => {
    if(onChange) onChange() 
  }

  const renderType = (t) => {
    switch(t){
      case "multipart/form-data":
        return "formData"
      default:
        return "formData"
    }
  }

  const renderRequestBody = () => {
    const type = Object.keys(content)[0]
    const properties = content[type].schema.properties

    return Object.keys(properties).map((key, i)=>(
      <Input fieldType={renderType(type)} onChange={onInputChange} key={`iku-${i}`} data={{name: key, ...properties[key]}} />
    ))
  }

  return (
    <form action="" ref={onFormInit}>
      {parameters.map((parameter, i)=>(
        <Input fieldType={parameter.in} onChange={onInputChange} key={`ik-${i}`} data={parameter} />
      ))}
      {content && renderRequestBody()}
    </form>
  );
}


export default PathParameters