function compare(a, b) {
    const bandA = a.node.edge_media_preview_like.count;
    const bandB = b.node.edge_media_preview_like.count;

    let comparison = 0;
    if (bandA < bandB) {
        comparison = 1;
    } else if (bandA > bandB) {
        comparison = -1;
    }
    return comparison;
}
export default compare