
import React from 'react';

const PageItem = (props)=>(
    <li key={props.index}>
        <span>{props.page.title}</span>
    </li>
);
export default PageItem;