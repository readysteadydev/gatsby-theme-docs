/** @jsx jsx */
import { jsx } from 'theme-ui'

const DocTreeItem = (props) => {
    return (
        <div sx={{
            variant: 'styles.SidebarItem'
        }}
        {...props}>
            {props.children}
        </div>
    );
};

export default DocTreeItem;