
import React from 'react';
import * as CornerTypes from './Corners.styles';
import cornerImage from 'assets/images/corner-content.svg';


interface CornerProps {
    type?: 'LT' | 'LB' | 'RT' | 'RB';
    size?: number;
    src?: string;
}

export const Corners = (props: CornerProps): JSX.Element => {
    return (
        <React.Fragment>
            {props.type === 'LT' && <CornerTypes.ConerWrapperLT size={props.size}><img src={props.src ? props.src : cornerImage} alt='corner' /></CornerTypes.ConerWrapperLT>}
            {props.type === 'LB' && <CornerTypes.ConerWrapperLB size={props.size}><img src={props.src ? props.src : cornerImage} alt='corner' /></CornerTypes.ConerWrapperLB>}
            {props.type === 'RT' && <CornerTypes.ConerWrapperRT size={props.size}><img src={props.src ? props.src : cornerImage} alt='corner' /></CornerTypes.ConerWrapperRT>}
            {props.type === 'RB' && <CornerTypes.ConerWrapperRB size={props.size}><img src={props.src ? props.src : cornerImage} alt='corner' /></CornerTypes.ConerWrapperRB>}
        </React.Fragment>
    )
}