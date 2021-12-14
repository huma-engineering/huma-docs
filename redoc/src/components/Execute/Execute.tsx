import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { RightPanelButton, ExecuteRequest, RowExecute } from '../../common-elements';
import { l } from '../../services/Labels';
import { getPlayloadSample } from '../../services';
import { PayloadCode } from '../PayloadSamples/PayloadCode';
import SwaggerClient from 'swagger-client';
import Hawk from 'hawk';
import { ResponseServer } from '../ResponseServer/ResponseServer';
import {LoadingSimple} from "../Loading/LoadingSimple";
import PathParameters from "../PathParameters/PathParameters";

interface componentInterface {
  operation: any;
  onTogle: any;
}

const Execute: FunctionComponent<componentInterface> = ({ operation, onTogle }) => {

  const { codeSamples } = operation
  const [isTry, setIsTry] = useState(false)
  const [value, setValue] = useState("")
  const samples = getPlayloadSample(codeSamples)
  const [server, setServer] = useState(operation.servers[0].url)
  const [response, setResponse] = useState({})
  const [isFetching, setIsFetching] = useState(false)

  const onChange = (e) => {
    setValue(e)
  }

  const onExecute = () => {

    setResponse({})
    setIsFetching(true)

    const credentials = {
      id: '617192207e1f9620307642aa.8f495502f70a375d919fcc6e',
      key: 'b404a2581d86df2fd6fb36f2377b851e1d90de816bb1285e6d567623393ebae0',
      algorithm: 'sha256'
    }

    const mehtod = operation.httpVerb

    const { header } = Hawk.client.header(`
    ${server}${operation.path ? operation.path : ''}`,
      mehtod,
      {
        credentials: credentials,
        payload: value,
        contentType: 'application/json'
      });

    const request = {
      url: `${server}${operation.path ? operation.path : ''}`,
      mode: 'cors',
      method: mehtod,
      body: value,
      responseInterceptor: (r) => { 
        setResponse(r)
        setIsFetching(false)
       },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': header
      },
    };

    SwaggerClient.http(request)
  }

  const onChangeServer = (server) => {
    setServer(server)
  }

  const isParameters = () => {
    return operation.operationSpec.parameters?.length > 0
  }

  return (
    <div>
      {(isTry && codeSamples) &&
        <ExecuteRequest>
          {samples &&
            <PayloadCode
              variant="execute"
              content={samples.requestBodyContent}
              servers={operation.servers}
              onChange={onChange}
              onChangeServer={onChangeServer}
            />
          }
          {isParameters() && <PathParameters operationSpec={operation.operationSpec} />}
        </ExecuteRequest>
      }
      {!isTry && <RowExecute>
        <RightPanelButton
          onClick={
            () => {
              setIsTry(true);
              console.log(operation)
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
          disabled={isFetching}
          style={{ width: "calc(50% - 10px)" }}>
            {(isFetching) && <LoadingSimple color="#ffffff"/>}
          {l('execute')}
        </RightPanelButton>
      </RowExecute>}
      {Object.keys(response).length > 0 && <ResponseServer response={response} />}
    </div>
  );
}


export default Execute