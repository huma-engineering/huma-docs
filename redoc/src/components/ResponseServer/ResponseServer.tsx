import * as React from 'react';
import { FunctionComponent } from 'react';
import { RightPanelHeader, Tab, TabList, TabPanel, Tabs } from '../../common-elements';
import { PayloadServer } from '../PayloadSamples/PayloadServer';
import { l } from '../../services/Labels';

interface componentInterface {
  response: { status?: number, data?: string };
}

export const ResponseServer: FunctionComponent<componentInterface> = ({ response }) => {

  return (
    (response?.data ?
      <div>
        <RightPanelHeader> {l('responseServer')} </RightPanelHeader>

        <Tabs defaultIndex={0}>
          <TabList>
            <Tab className={`tab-${response.status === 200 ? "success" : "error"}`} key={response.status}>
              {response.status}
            </Tab>
          </TabList>
          <TabPanel key={response.status}>
            <div>
              <PayloadServer content={{
                examples: {
                  // @ts-ignore: Unreachable code error
                  default: {
                    mime: "application/json",
                    value: JSON.parse(response.data!)
                  }
                },
                name: "application/json",
              }} />
            </div>
          </TabPanel>
        </Tabs>
      </div> : <></>
    )
  );
}
