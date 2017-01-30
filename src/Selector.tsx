import * as React from 'react';
import ListItem from "./ListItem";
import "./css/Selector.css";
import hydra from './interfaces';

class Selector extends React.Component<{ options: hydra.selectorOption[], active: hydra.selectorType }, any> {

    constructor(props: { options: hydra.selectorOption[], active: hydra.selectorType }) {
        super(props);
    }

    render() {
        const listItems = this.props.options.map((prop, i) => <ListItem key={i.toString()} type={prop.type} value={prop.value} callback={prop.callback} active={prop.type === this.props.active} />);
        return (
            <ul className="feature-selector collection">{listItems}</ul>
        )
    }
}


export default Selector;