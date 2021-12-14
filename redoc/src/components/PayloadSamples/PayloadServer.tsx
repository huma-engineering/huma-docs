import { observer } from 'mobx-react';
import * as React from 'react';
import { MediaTypeSamples } from './MediaTypeSamples';

import { MediaTypeModel } from '../../services/models';
import { DropdownOrLabel } from '../DropdownOrLabel/DropdownOrLabel';
import { InvertedSimpleDropdown, MimeLabel } from './styled.elements';

export interface PayloadSamplesProps {
  content: MediaTypeModel;
  variant?: string;
}

@observer
export class PayloadServer extends React.Component<PayloadSamplesProps> {
  render() {
    const mediaType = this.props.content;

    return (
      <MediaTypeSamples
        key="samples"
        mediaType={mediaType}
        renderDropdown={this.renderDropdown}
      />
    );
  }

  private renderDropdown = props => {
    return <DropdownOrLabel Label={MimeLabel} Dropdown={InvertedSimpleDropdown} {...props} />;
  };
}