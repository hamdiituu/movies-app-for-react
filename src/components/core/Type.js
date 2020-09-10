import React from "react";
import {SEARCH_TYPES} from '../../utils/constants';
import {Badge} from 'reactstrap';
export default class Type extends React.Component{
    render() {
        return(
            <Badge color="success">
                {
                    SEARCH_TYPES.find(item => item.value === this.props.type).name

                }
            </Badge>
        )
    }
}