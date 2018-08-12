import React from 'react';
import PropTypes from 'prop-types';
import Base from './base';
import './withFlexContainer.pcss';

export const flexContainerMapping = {
    // -------------
    // flex-direction
    // -------------
    directionRow: 'flex-direction--row',
    directionRowReverse: 'flex-direction--row-reverse',
    directionColumn: 'flex-direction--column',
    directionColumnReverse: 'flex-direction--column-reverse',
    // -------------
    // flex-wrap
    // -------------
    noWrap: 'flex-wrap--nowrap',
    wrap: 'flex-wrap--wrap',
    wrapReverse: 'flex-wrap--wrap-reverse',
    // -------------
    // justify-content
    // -------------
    justifyStart: 'justify-content--start',
    justifyEnd: 'justify-content--end',
    justifyCenter: 'justify-content--center',
    justifyBetween: 'justify-content--space-between',
    justifyAround: 'justify-content--space-around',
    justifyEvenly: 'justify-content--space-evenly',
    // -------------
    // align-items
    // -------------
    itemsStart: 'align-items--start',
    itemsEnd: 'align-items--end',
    itemsCenter: 'align-items--center',
    itemsBaseline: 'align-items--baseline',
    itemsStretch: 'align-items--stretch',
    // -------------
    // align-content
    // -------------
    contentStart: 'align-content--space-start',
    contentEnd: 'align-content--space-end',
    contentCenter: 'align-content--space-center',
    contentBetween: 'align-content--space-between',
    contentAround: 'align-content--space-around',
    contentEvenly: 'align-content--space-event',
    contentStetch: 'align-content--space-stretch',
};

export const flexContainerKeys = Object.keys( flexContainerMapping );

const flexContainerPropTypes = flexContainerKeys.reduce( ( acc, name )=>{
    acc[name] = PropTypes.bool;
    return acc;
}, {} );

const flexContainerDefaultProps = flexContainerKeys.reduce( ( acc, name )=>{
    acc[name] = false;
    return acc;
}, {} );

const withFlexContainerHOC = ( WrappedComponent ) =>{

    class FlexContainer extends Base {
        static propTypes = {
            className: PropTypes.string,
            ...flexContainerPropTypes,
        }

        static defaultProps = {
            className: '',
            ...flexContainerDefaultProps,
        }

        keys = flexContainerKeys;
        mapping = flexContainerMapping;

        render() {
            return (
                <WrappedComponent {...this.passthroughProps} className={this.className} />
            );
        }
    }

    return FlexContainer;
};

export default withFlexContainerHOC;
