/** @jsx jsx */
import { jsx } from 'theme-ui'

const Body = (props) => {
    return (
        <div sx={{
            display: 'flex',
            flex: '1 1 auto',
            justifyContent: 'space-around',
            flexDirection: [
                'column',
                'column',
                'row'
            ],
            alignItems: 'start',
            minHeight: 'calc(100vh - 150px)',
            position: 'relative',

            color: 'text',
            backgroundColor: 'background',
            variant: 'layout.Body',
        }}
        {...props}>
            {props.children}
        </div>
    );
};

export default Body;