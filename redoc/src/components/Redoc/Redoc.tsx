import * as PropTypes from 'prop-types';
import * as React from 'react';

import { ThemeProvider } from '../../styled-components';
import { OptionsProvider } from '../OptionsProvider';

import { AppStore } from '../../services';
import { ApiInfo } from '../ApiInfo/';
import { ContentItems } from '../ContentItems/ContentItems';
import { SideMenu } from '../SideMenu/SideMenu';
import { StickyResponsiveSidebar } from '../StickySidebar/StickyResponsiveSidebar';
import { ApiContentWrap, BackgroundStub, RedocWrap } from './styled.elements';

import { SearchBox } from '../SearchBox/SearchBox';
import { StoreProvider } from '../StoreBuilder';
import Modal from '../Modal/Modal';
import { l } from '../../services/Labels';

export interface RedocProps {
  store: AppStore;
}

export class Redoc extends React.Component<RedocProps> {

  state = {
    showAuthorization: false,
  };

  static propTypes = {
    store: PropTypes.instanceOf(AppStore).isRequired,
  };

  componentDidMount() {
    this.props.store.onDidMount();
  }

  componentWillUnmount() {
    this.props.store.dispose();
  }

  onModalShow = () => {
    this.setState({showAuthorization:true})
  }

  render() {

    const {
      store: { menu, options, search, marker },
    } = this.props;
    const store = this.props.store;

    return (
      <ThemeProvider theme={options.theme}>
        <StoreProvider value={store}>
          <OptionsProvider value={options}>
            <RedocWrap className="redoc-wrap">
              <StickyResponsiveSidebar menu={menu} className="menu-content">
                {(!options.disableSearch && (
                  <SearchBox
                    search={search!}
                    marker={marker}
                    getItemById={menu.getItemById}
                    onActivate={menu.activateAndScroll}
                  />
                )) ||
                  null}
                <SideMenu onModalShow={this.onModalShow} menu={menu} />
              </StickyResponsiveSidebar>
              <ApiContentWrap className="api-content">
                <ApiInfo store={store} />
                <ContentItems items={menu.items as any} />
              </ApiContentWrap>
              <BackgroundStub />
              <Modal onClose={()=>this.setState({showAuthorization:false})} title={l("authorization")} show={this.state.showAuthorization} />
            </RedocWrap>
          </OptionsProvider>
        </StoreProvider>
      </ThemeProvider>
    );
  }
}
