import { observer } from 'mobx-react';
import * as React from 'react';

import { IMenuItem, MenuStore } from '../../services/MenuStore';
import { OptionsContext } from '../OptionsProvider';
import { MenuItems } from './MenuItems';
import { RowAuthorize } from "../../common-elements/fields-layout";
import { ButtonAuthorize } from "../../common-elements/buttons";
import { PerfectScrollbarWrap } from '../../common-elements/perfect-scrollbar';
import { l } from '../../services/Labels';
import { IconLock } from '../../common-elements';

@observer

export class SideMenu extends React.Component<{ menu: MenuStore; className?: string; onModalShow?: () => void }> {
  static contextType = OptionsContext;
  private _updateScroll?: () => void;

  render() {
    const store = this.props.menu;
    const {onModalShow} = this.props
    
    return (
      <>
        <RowAuthorize>
          <IconLock style={{ marginRight: "1rem" }} />
          <ButtonAuthorize onClick={onModalShow}>{l("authorize")}</ButtonAuthorize>
        </RowAuthorize>
        <PerfectScrollbarWrap
          updateFn={this.saveScrollUpdate}
          className={this.props.className}
          options={{
            wheelPropagation: false,
          }}
        >
          <MenuItems items={store.items} onActivate={this.activate} root={true} />
        </PerfectScrollbarWrap>
      </>

    );
  }

  activate = (item: IMenuItem) => {
    if (item && item.active && this.context.menuToggle) {
      return item.expanded ? item.collapse() : item.expand();
    }

    this.props.menu.activateAndScroll(item, true);
    setTimeout(() => {
      if (this._updateScroll) {
        this._updateScroll();
      }
    });
  };

  private saveScrollUpdate = upd => {
    this._updateScroll = upd;
  };
}
