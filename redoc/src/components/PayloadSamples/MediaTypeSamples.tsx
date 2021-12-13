import * as React from 'react';

import styled from '../../styled-components';

import { DropdownProps } from '../../common-elements';
import { MediaTypeModel } from '../../services/models';
import { Markdown } from '../Markdown/Markdown';
import { Example } from './Example';
import { DropdownLabel, DropdownWrapper, NoSampleLabel } from './styled.elements';

export interface PayloadSamplesProps {
  mediaType: MediaTypeModel;
  variant?: string;
  servers?: any;
  renderDropdown: (props: DropdownProps) => JSX.Element;
  onChange?: (e: string) => void;
  onChangeServer?: (e: string) => void;
}

interface MediaTypeSamplesState {
  activeIdx: number;
  activeServerIdx: number;
}

export class MediaTypeSamples extends React.Component<PayloadSamplesProps, MediaTypeSamplesState> {
  state = {
    activeIdx: 0,
    activeServerIdx: 0
  };
  switchMedia = ({ idx }) => {
    this.setState({
      activeIdx: idx,
    });
  };
  switchServer = ({ idx, value }) => {
    if(this.props.onChangeServer) this.props.onChangeServer(value)

    this.setState({
      activeServerIdx: idx,
    });
  };
  render() {
    const { activeIdx, activeServerIdx } = this.state;
    const examples = this.props.mediaType.examples || {};
    const mimeType = this.props.mediaType.name;
    const variant = this.props.variant;
    const servers = this.props.servers;
    const onChange = this.props.onChange;
    const serversList = (servers && servers.length > 1) ? servers.map((item, idx) => {
      return {
        value: item.url,
        idx,
      };
    }) : [];
    const noSample = <NoSampleLabel>No sample</NoSampleLabel>;

    const examplesNames = Object.keys(examples);
    if (examplesNames.length === 0) {
      return noSample;
    }

    if (examplesNames.length > 1) {
      const options = examplesNames.map((name, idx) => {
        return {
          value: examples[name].summary || name,
          idx,
        };
      });

      const example = examples[examplesNames[activeIdx]];
      const description = example.description;

      return (
        <SamplesWrapper>
          {servers && servers.length > 1 &&
            <DropdownWrapper>
              <DropdownLabel>Servers</DropdownLabel>
              {this.props.renderDropdown({
                value: serversList[activeServerIdx].value,
                options:serversList,
                onChange: this.switchServer,
                ariaLabel: 'Server',
              })}
            </DropdownWrapper>
          }
          <DropdownWrapper>
            <DropdownLabel>Example</DropdownLabel>
            {this.props.renderDropdown({
              value: options[activeIdx].value,
              options,
              onChange: this.switchMedia,
              ariaLabel: 'Example',
            })}
          </DropdownWrapper>
          <div>
            {description && <Markdown source={description} />}
            <Example variant={variant} example={example} mimeType={mimeType} onChange={onChange} />
          </div>
        </SamplesWrapper>
      );
    } else {
      const example = examples[examplesNames[0]];
      return (
        <SamplesWrapper>
          {example.description && <Markdown source={example.description} />}
          <Example variant={variant} example={example} mimeType={mimeType} onChange={onChange} />
        </SamplesWrapper>
      );
    }
  }
}

const SamplesWrapper = styled.div`
  margin-top: 15px;
`;
