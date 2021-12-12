import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { RightPanelButton, ExecuteRequest, RowExecute } from '../../common-elements';
import { l } from '../../services/Labels';
import { getPlayloadSample } from '../../services';
import { PayloadCode } from '../PayloadSamples/PayloadCode';

interface componentInterface {
  operation: any;
  onTogle: any;
}

const Execute: FunctionComponent<componentInterface> = ({ operation, onTogle }) => {

  const { codeSamples } = operation
  const [isTry, setIsTry] = useState(false)
  const [value, setValue] = useState("")
  const samples = getPlayloadSample(codeSamples)

  const onChange = (e) => {
    setValue(e)
  }

  const onExecute = () => {
    console.log(value)
  }

  return (
    <div>
      {(isTry && codeSamples) &&
        <ExecuteRequest>
          {samples &&
            <PayloadCode
              variant="execute"
              content={samples.requestBodyContent}
              onChange={onChange}
            />
          }
        </ExecuteRequest>
      }
      {!isTry && <RowExecute>
        <RightPanelButton
          onClick={
            () => {
              setIsTry(true);
              onTogle(false);
            }}
        >
          {l('tryItOut')}
        </RightPanelButton>
      </RowExecute>
      }
      {isTry && <RowExecute>
        <RightPanelButton
          style={{ width: "calc(50% - 10px)" }}
          onClick={
            () => {
              setIsTry(false);
              onTogle(true);
            }}
        >
          {l('backToSamples')}
        </RightPanelButton>
        <RightPanelButton
          onClick={onExecute}
          className='primary'
          style={{ width: "calc(50% - 10px)" }}>
          {l('execute')}
        </RightPanelButton>
      </RowExecute>}
    </div>
  );
}


export default Execute