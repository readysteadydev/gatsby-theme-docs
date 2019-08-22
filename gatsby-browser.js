import React from "react"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import { DocsProvider } from "./src/context/DocsContext"

export const wrapRootElement = ({ element }) => (
    <DocsProvider>{element}</DocsProvider>
)
