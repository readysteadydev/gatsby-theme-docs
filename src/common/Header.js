/** @jsx jsx */
import { jsx } from 'theme-ui'

const Header = (props) => {
    return (
        <div sx={{
            maxHeight: '100px',
            backgroundColor: 'block',
            '& h1': {
                fontSize: ['1.5em','2em','2em'],
            },
            padding: ['0 1em','0 1em','0 2em'],
            variant: 'layout.Header',
        }}
        {...props}>
            {props.children}
        </div>
    );
};

export default Header;