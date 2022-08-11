import React, { useMemo, useEffect } from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import { Redoc as RedocComponent, RedocStandalone, AppStore } from '@huma-engineering/huma-redoc';
import { RedocProps as Props } from '../../types/common';
import {lightTheme, darkTheme, redocOptions} from "./redocData";

import './styles.css';

/*!
 * Redocusaurus
 * https://rohit-gohri.github.io/redocusaurus/
 * (c) 2021 Rohit Gohri
 * Released under the MIT License
 */
function Redoc(props: Props): JSX.Element {
  const { isDarkTheme } = useColorMode();

  const theme = isDarkTheme ? darkTheme : lightTheme;
  const { spec, specUrl } = props;
  const store = useMemo(() => {
    if (!spec) return null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new AppStore(spec as any, specUrl, {
      ...redocOptions,
      theme,
    });
  }, [spec, specUrl, redocOptions, theme]);

  useEffect(()=>{
    const menu = document.querySelector<HTMLElement>(".redocusaurus .menu-content")
    const nav = document.querySelector<HTMLElement>("nav.navbar")

    menu.style.top = `${nav.offsetHeight}px`
    menu.style.height = `calc(100vh - ${nav.offsetHeight})`

  }, [])

  return (
    <div className="redocusaurus">
      {store ? (
        <RedocComponent store={store} />
      ) : (
        <RedocStandalone
          spec={spec}
          specUrl={specUrl}
          options={{
            ...redocOptions,
            theme,
          }}
        />
      )}
    </div>
  );
}

export default Redoc;
