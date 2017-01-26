import * as React from 'react';
import './css/ListItem.css';
import hydra from './interfaces';

const ListItem = (prop: hydra.selectorOption) => {
    let className = `list-item collection-item ${prop.active ? "active" : ""}`;
    return (<li className={className} onClick={prop.callback} > {prop.value}</li >)
};

export default ListItem;