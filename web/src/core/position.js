export const coordsToAlgebraic = (x, y) => {
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const rows = ['8', '7', '6', '5', '4', '3', '2', '1']
    return `${columns[y]}${rows[x]}`
}