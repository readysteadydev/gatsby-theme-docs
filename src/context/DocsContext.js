import React, { useState } from "react"

const DocsContext = React.createContext()

const DocsProvider = ({ children }) => {
    const [state, setState] = useState({
        currentPath: "/",
        expanded: {}
    })

    const context = {
        state,
        setState,
    }

    return (
        <DocsContext.Provider value={context}>{children}</DocsContext.Provider>
    )
}

export default DocsContext

export { DocsProvider }
