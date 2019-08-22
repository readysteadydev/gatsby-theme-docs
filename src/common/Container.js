/** @jsx jsx */
import { jsx } from 'theme-ui'

const Container = (props) => {
    return (
        <div sx={{
            maxWidth: ['auto','auto','35em','35em'],
            margin: '0 auto',
            variant: 'layout.Container',
        }}
        {...props}>
            {props.children}
        </div>
    );
};

export default Container;