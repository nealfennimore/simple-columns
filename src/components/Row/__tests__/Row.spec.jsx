import React from 'react';
import renderer from 'react-test-renderer';
import { flexContainerKeys } from '../../../hoc/withFlexContainer';
import Row from '../Row';

describe( 'Row', ()=>{
    test( 'should match snapshot', ()=>{
        const component = renderer.create(
            <Row />
        );
        expect( component.toJSON() ).toMatchSnapshot();
    } );
    test( 'should match snapshot with children', ()=>{
        const component = renderer.create(
            <Row>children</Row>
        );
        expect( component.toJSON() ).toMatchSnapshot();
    } );
    test( 'should match snapshot with flex parent class names', ()=>{
        const props = flexContainerKeys.reduce( ( acc, prop )=>{
            acc[prop] = true;
            return acc;
        }, {} );
        const component = renderer.create(
            <Row {...props} />
        );
        expect( component.toJSON() ).toMatchSnapshot();
    } );
    test( 'should match snapshot with passthrough attributes', ()=>{
        const component = renderer.create(
            <Row className="custom" id="id" />
        );
        expect( component.toJSON() ).toMatchSnapshot();
    } );
} );
