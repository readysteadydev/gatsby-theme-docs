/** @jsx jsx */
import { jsx } from 'theme-ui'

const Sidebar = (props) => {
    return (
        <div sx={{
            flex: ['0','0','0 0 15em','0 0 20em'],
            fontSize: ['1.2em','1.4em','1em','1.2em'],
            backgroundColor: 'block',
            margin: '1em',
            marginBottom: ['0', '0', '1em'],
            borderRadius: '5px',
            padding: '0 1em',
            height: 'auto',
            width: ['calc(100% - 1em - 1em)','calc(100% - 1em - 1em)', 'auto'],
            variant: 'layout.Sidebar',
        }}
        {...props}>
            <label sx={{
                height: '40px',
                display: ['block','block','none'],
                margin: '0 auto',
                textAlign: 'center',
                'svg': {
                    height: '25px',
                    width: '25px',
                    margin: '5px auto',
                }
            }}
            htmlFor={`${props.id}sidebarToggle`}
            ><svg viewBox="0 0 20 20">
            <path fill="hsl(0, 0%, 60%)" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
                c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
                s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
                c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
        </svg></label>
            <input type="checkbox" sx={{
                    display: 'none',
                    '& ~ div': {
                        display: ['none','none','block'],
                    },
                    '&:checked ~ div': {
                        display: 'block',
                    }
            }} id={`${props.id}sidebarToggle`} />
            {props.children}
        </div>
    );
};

export default Sidebar;