import * as React from 'react';
import { FunctionComponent } from 'react';
import { MediaTypeSamples } from './MediaTypeSamples';
import { MediaContentModel } from '../../services/models';
import { DropdownOrLabel } from '../DropdownOrLabel/DropdownOrLabel';
import { MediaTypesSwitch } from '../MediaTypeSwitch/MediaTypesSwitch';
import { InvertedSimpleDropdown, MimeLabel } from './styled.elements';

interface componentInterface {
  content: MediaContentModel;
  variant?: string;
  servers?: [];
  onChange?: (e:string) => void;
  onChangeServer?: (e: string) => void;
}

export const PayloadCode: FunctionComponent<componentInterface> = ({ content, variant, onChange, servers, onChangeServer }) => {

  const mimeContent = content;
  if (mimeContent === undefined) {
    return null;
  }

  const renderDropdown = (props) => {
    return <DropdownOrLabel Label={MimeLabel} Dropdown={InvertedSimpleDropdown} {...props} />;
  };

  return (
    <MediaTypesSwitch content={mimeContent} renderDropdown={renderDropdown} withLabel={true}>
      {mediaType => (
        <MediaTypeSamples
          key="samples"
          mediaType={mediaType}
          variant={variant}
          servers={servers}
          renderDropdown={renderDropdown}
          onChange={onChange}
          onChangeServer={onChangeServer}
        />
      )}
    </MediaTypesSwitch>
  );
}
