import * as React from 'react';
import styled from '../../styled-components';
import { FunctionComponent, useRef, useState } from 'react';
import { SampleControls } from '../../common-elements';
import { CopyButtonWrapper } from '../../common-elements/CopyButtonWrapper';
import { PrismDiv } from '../../common-elements/PrismDiv';
import { CodeArea } from '../../common-elements';
import { jsonToHTML } from '../../utils/jsonToHtml';
import { OptionsContext } from '../OptionsProvider';
import { jsonStyles } from './style';
import { useEffect } from 'react';

interface componentInterface {
  data: any;
  className?: string;
  variant?: string;
  onChange?: (e:string) => void
}

const JsonViewerWrap = styled.div`
  &:hover > ${SampleControls} {
    opacity: 1;
  }
`;

export const Json: FunctionComponent<componentInterface> = ({ data, className, variant, onChange }) => {

  const node = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(JSON.stringify(data, undefined, 2));

  useEffect(()=>{
    if(onChange) onChange(value)
  }, [value])

  useEffect(()=>{
    setValue(JSON.stringify(data, undefined, 2))
  }, [data])

  useEffect(() => {
    if (variant != "execute" && null !== node.current) {
      node.current.addEventListener('click', clickListener);
      node.current.addEventListener('focus', focusListener);
    }

    return () => {
      if (variant != "execute" && null !== node.current) {
        node.current.removeEventListener('click', clickListener);
        node.current.removeEventListener('focus', focusListener);
      }
    }
  }, [])

  const getJson = (v) => {
    return v
  }

  const renderInnerExecute = () => {
    return <CodeArea
      rows={20}
      onChange={e => setValue(e.target.value)}
      value={getJson(value)}
    ></CodeArea>
  };

  const renderInner = ({ renderCopyButton }) => (
    <JsonViewerWrap>
      <SampleControls>
        {renderCopyButton()}
        <button onClick={expandAll}> Expand all </button>
        <button onClick={collapseAll}> Collapse all </button>
      </SampleControls>
      <OptionsContext.Consumer>
        {options => (
          <PrismDiv
            className={className}
            // tslint:disable-next-line
            ref={node}
            dangerouslySetInnerHTML={{
              __html: jsonToHTML(data, options.jsonSampleExpandLevel),
            }}
          />
        )}
      </OptionsContext.Consumer>
    </JsonViewerWrap>
  );

  const expandAll = () => {
    if (null !== node.current) {
      const elements = node.current.getElementsByClassName('collapsible');
      for (const collapsed of Array.prototype.slice.call(elements)) {
        const parentNode = collapsed.parentNode as Element;
        parentNode.classList.remove('collapsed');
        parentNode.querySelector('.collapser')!.setAttribute('aria-label', 'collapse');
      }
    }
  };

  const collapseAll = () => {
    if (null !== node.current) {
      const elements = node.current.getElementsByClassName('collapsible');
      // skip first item to avoid collapsing whole object/array
      const elementsArr = Array.prototype.slice.call(elements, 1);

      for (const expanded of elementsArr) {
        const parentNode = expanded.parentNode as Element;
        parentNode.classList.add('collapsed');
        parentNode.querySelector('.collapser')!.setAttribute('aria-label', 'expand');
      }
    }
  };

  const collapseElement = (target: HTMLElement) => {
    let collapsed;
    if (target.className === 'collapser') {
      collapsed = target.parentElement!.getElementsByClassName('collapsible')[0];
      if (collapsed.parentElement.classList.contains('collapsed')) {
        collapsed.parentElement.classList.remove('collapsed');
        target.setAttribute('aria-label', 'collapse');
      } else {
        collapsed.parentElement.classList.add('collapsed');
        target.setAttribute('aria-label', 'expand');
      }
    }
  };

  const clickListener = (event: MouseEvent) => {
    collapseElement(event.target as HTMLElement);
  };

  const focusListener = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      collapseElement(event.target as HTMLElement);
    }
  };

  return variant == "execute" ? renderInnerExecute() : <CopyButtonWrapper data={data}>{renderInner}</CopyButtonWrapper>;

}

export const JsonViewer = styled(Json)`
  ${jsonStyles};
`;
