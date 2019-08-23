/** @jsx jsx */
import { jsx } from 'theme-ui'

const Container = (props) => {
    return (
        <div sx={{
            maxWidth: ['auto','35em','35em','55em'],
            margin: '0 auto',
            variant: 'layout.Container',
        }}
        {...props}>
            {props.children}
        </div>
    );
};

export default Container;