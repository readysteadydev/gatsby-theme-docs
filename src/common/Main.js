/** @jsx jsx */
import { jsx } from 'theme-ui'

const Main = (props) => {
    return (
        <div sx={{
            flex: '1',
            width: '100%',
            fontSize: ['1em','1em','1em','1em'],
            padding: '1em',
            variant: 'layout.Main',
        }}
        {...props}>
            {props.children}
        </div>
    );
};

export default Main;