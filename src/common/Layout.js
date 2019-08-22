import React from 'react';
import { Global } from '@emotion/core'
import { css, Layout as StyledLayout } from 'theme-ui'

import { reset } from '../reset'

const Layout = ({children}) => (
    <>
        <Global styles={css(reset)} />
        <StyledLayout>
            {children}
        </StyledLayout>
    </>
)

export default Layout;