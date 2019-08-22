/** @jsx jsx */
import { jsx } from 'theme-ui'

const Footer = (props) => {
    return (
        <div sx={{
            backgroundColor: 'block',
            padding: '1em 2em',
            variant: 'layout.Footer',
        }}
        {...props}>
            {props.children}
        </div>
    );
};

export default Footer;