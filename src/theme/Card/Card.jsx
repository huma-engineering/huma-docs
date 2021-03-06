import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import useBaseUrl from '@docusaurus/useBaseUrl';

import "./Card.css";

export const Card = (props) => {
    const [displayLong, setDisplayLong] = React.useState(false);

    return <div className="ri-container">
        <div className="ri-description-short">
            <div className="ri-icon"><span className="fe fe-zap" /></div>
            <div className="ri-detail">
                <img src={useBaseUrl(props.icon)} />
                <div className="ri-title"><a href={props.page}>{props.title}</a></div>
                <div className="ri-description">
                    {props.description}
                    {React.Children.count(props.children) > 0 && <span className="ri-more fe fe-more-horizontal" onClick={() => setDisplayLong(!displayLong)}/>}

                </div>
            </div>
        </div>
        {displayLong && <div className="ri-description-long"><MDXProvider components={MDXComponents}>{props.children}</MDXProvider></div>}
    </div>
}