import React, { useMemo } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
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
  const { isDarkTheme } = useThemeContext();

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
