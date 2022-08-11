/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useCallback, useState, useEffect } from "react";
import classnames from "classnames";
import { useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { usePluginData } from '@docusaurus/useGlobalData';
const Search = props => {
  const initialized = useRef(false);
  const searchBarRef = useRef(null);
  const [indexReady, setIndexReady] = useState(false);
  const history = useHistory();
  const { siteConfig = {}, isClient = false } = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  const [maxWidth, setMaxWidth] = useState(300);
  const initAlgolia = (searchDocs, searchIndex, DocSearch) => {
    new DocSearch({
      searchDocs,
      searchIndex,
      inputSelector: "#search_input_react",
      // Override algolia's default selection event, allowing us to do client-side
      // navigation and avoiding a full page refresh.
      handleSelected: (_input, _event, suggestion) => {
        const url = baseUrl + suggestion.url;
        // Use an anchor tag to parse the absolute url into a relative url
        // Alternatively, we can use new URL(suggestion.url) but its not supported in IE
        const a = document.createElement("a");
        a.href = url;
        // Algolia use closest parent element id #__docusaurus when a h1 page title does not have an id
        // So, we can safely remove it. See https://github.com/facebook/docusaurus/issues/1828 for more details.

        history.push(url);
      }
    });
  };

  useEffect(() => {
    if (typeof window === 'object' || typeof window !== 'undefined') {
      setMaxWidth(window.innerWidth > 1100 ? 300 : 200)
    }
  }, [])

  const pluginData = usePluginData('docusaurus-lunr-search');
  const getSearchDoc = () =>
    process.env.NODE_ENV === "production"
      ? fetch(`${baseUrl}${pluginData.fileNames.searchDoc}`).then((content) => content.json())
      : Promise.resolve([]);

  const getLunrIndex = () =>
    process.env.NODE_ENV === "production"
      ? fetch(`${baseUrl}${pluginData.fileNames.lunrIndex}`).then((content) => content.json())
      : Promise.resolve([]);

  const loadAlgolia = () => {
    if (!initialized.current) {
      Promise.all([
        getSearchDoc(),
        getLunrIndex(),
        import("./lib/DocSearch"),
        import("./algolia.css")
      ]).then(([searchDocs, searchIndex, { default: DocSearch }]) => {
        if (searchDocs.length === 0) {
          return;
        }
        initAlgolia(searchDocs, searchIndex, DocSearch);
        setIndexReady(true);
      });
      initialized.current = true;
    }
  };

  const toggleSearchIconClick = useCallback(
    e => {
      if (!searchBarRef.current.contains(e.target)) {
        searchBarRef.current.focus();
      }

      if (typeof window === 'object' || typeof window !== 'undefined') {
        const w = window.innerWidth > 1100 ? 300 : 200;
        const searchPosition = searchBarRef.current.getBoundingClientRect().x;
        const logo = document.querySelector(".navbar__brand").getBoundingClientRect()
        const logoW = logo.x + logo.width + 16;
        const dropDown = document.querySelector(".ds-dropdown-menu");
        let width = 0;

        if(window.innerWidth > 1100) {
          width = window.innerWidth / 2 - (window.innerWidth - searchPosition) + w;
        }else {
          width = w + (searchPosition - logoW);
        }

        if (dropDown) {
          dropDown.style.width = `${width}px`
          dropDown.style.left = `-${width - w}px`
        }

        setMaxWidth(width)
      }

      props.handleSearchBarToggle && props.handleSearchBarToggle(!props.isSearchBarExpanded);
    },
    [props.isSearchBarExpanded]
  );

  const onBlur = () => {
    if (typeof window === 'object' || typeof window !== 'undefined') {
      const w = window.innerWidth > 1100 ? 300 : 200;
      setMaxWidth(w)
    }
  }

  if (isClient) {
    loadAlgolia();
  }

  return (
    <div className="navbar__search" key="search-box">
      <span
        aria-label="expand searchbar"
        role="button"
        className={classnames("search-icon", {
          "search-icon-hidden": props.isSearchBarExpanded
        })}
        onClick={toggleSearchIconClick}
        onKeyDown={toggleSearchIconClick}
        tabIndex={0}
      />
      <input
        id="search_input_react"
        type="search"
        placeholder={'Search'}
        aria-label="Search"
        className={classnames(
          "navbar__search-input",
          { "search-bar-expanded": props.isSearchBarExpanded },
          { "search-bar": !props.isSearchBarExpanded }
        )}
        onClick={loadAlgolia}
        onMouseOver={loadAlgolia}
        onFocus={toggleSearchIconClick}
        onBlur={(e) => { toggleSearchIconClick(e); onBlur(e) }}
        ref={searchBarRef}
        style={{ maxWidth: `${maxWidth}px` }}
        disabled={!indexReady}
      />
    </div>
  );
};

export default Search;
