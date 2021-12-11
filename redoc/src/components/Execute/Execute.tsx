import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { RightPanelButton, ExecuteRequest, RowExecute, CodeArea } from '../../common-elements';
import { l } from '../../services/Labels';
import { getPlayloadSample } from '../../services';
import { PayloadSamples } from '../PayloadSamples/PayloadSamples';

interface componentInterface {
  operation: any;
  onTogle: any;
}

const Execute: FunctionComponent<componentInterface> = ({ operation, onTogle }) => {

  const { codeSamples } = operation
  const [isTry, setIsTry] = useState(false)

  return (
    <div>
      {(isTry && codeSamples) && <CodeArea>
        {getPlayloadSample(codeSamples).source}
      </CodeArea>}
      {(isTry && codeSamples) &&
        <ExecuteRequest>
          <PayloadSamples variant="execute" content={getPlayloadSample(codeSamples).requestBodyContent} />
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
        <RightPanelButton className='primary' style={{ width: "calc(50% - 10px)" }}>
          {l('execute')}
        </RightPanelButton>
      </RowExecute>}
    </div>
  );
}


export default Execute