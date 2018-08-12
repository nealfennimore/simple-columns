import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Base extends PureComponent {
    static propTypes = {
        className: PropTypes.string, // eslint-disable-line react/require-default-props
    }

    get entries() {
        return Object.entries( this.props );
    }

    get derivedClassNames() {
        return this.entries.reduce( ( acc, [key, value] )=> {
            if( value && this.keys.includes( key ) ) {
                const className = this.mapping[key];
                acc.push( className );
            }
            return acc;
        }, [] );
    }

    get className() {
        return [ 'flex', ...this.derivedClassNames, this.props.className]
            .reduce( ( acc, className )=> {
                if( className && typeof className === 'string' ) {
                    acc.push( className.trim() );
                }
                return acc;
            }, [] )
            .join( ' ' );
    }

    get passthroughProps() {
        return this.entries.reduce( ( acc, [key, value] ) => {
            if( ! this.keys.includes( key ) ) {
                acc[key] = value;
            }
            return acc;
        }, {} );
    }
}
