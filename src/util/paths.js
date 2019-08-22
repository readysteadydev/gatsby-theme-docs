export const trim = p => p.replace(/\/+$/, "").replace(/^\//, "")

export const getPath = (path, basePath = '') => {
    const p = `/${trim(basePath)}/${trim(path)}/`.replace(/\/+/g, '/')
    return p
}