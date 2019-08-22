/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Global } from '@emotion/core'
import { css } from 'theme-ui'

import { reset } from '../reset'

const FixedLayout = props => (
    <React.Fragment>
        <Global styles={css(reset)} />
        <div sx={{
            position: 'relative',
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            variant: 'layout.FixedLayout',
        }}
        {...props}>
            {props.children}
        </div>
    </React.Fragment>
)

export default FixedLayout;