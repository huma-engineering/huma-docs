import * as React from 'react';
import { FunctionComponent, useContext } from 'react';
import { isPayloadSample, OperationModel } from '../../services';
import { PayloadSamples } from '../PayloadSamples/PayloadSamples';
import { SourceCodeWithCopy } from '../SourceCode/SourceCode';

import { RightPanelHeader, Tab, TabList, TabPanel, Tabs } from '../../common-elements';
import { OptionsContext } from '../OptionsProvider';
import { l } from '../../services/Labels';

interface componentInterface {
  operation: OperationModel;
  isActive: boolean;
}

export const RequestSamples: FunctionComponent<componentInterface> = ({ operation, isActive }) => {

  const context = useContext(OptionsContext)
  const samples = operation.codeSamples;
  const hasSamples = samples.length > 0;
  const hideTabList = samples.length === 1 ? context.hideSingleRequestSampleTab : false;

  return (
    ((hasSamples && isActive) && (
      <div>
        <RightPanelHeader> {l('requestSamples')} </RightPanelHeader>

        <Tabs defaultIndex={0}>
          <TabList hidden={hideTabList}>
            {samples.map(sample => (
              <Tab key={sample.lang + '_' + (sample.label || '')}>
                {sample.label !== undefined ? sample.label : sample.lang}
              </Tab>
            ))}
          </TabList>
          {samples.map(sample => (
            <TabPanel key={sample.lang + '_' + (sample.label || '')}>
              {isPayloadSample(sample) ? (
                <div>
                  <PayloadSamples content={sample.requestBodyContent} />
                </div>
              ) : (
                <SourceCodeWithCopy lang={sample.lang} source={sample.source} />
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    )) ||
    null
  );
}
