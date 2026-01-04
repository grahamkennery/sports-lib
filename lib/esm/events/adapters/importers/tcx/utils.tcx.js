export const findChildNode = (fromNodeList, childNodeName) => {
    const childNodeFound = Array.from(fromNodeList).find((childNode) => {
        return childNode.nodeName === childNodeName || childNode.nodeName.match(childNodeName) !== null;
    });
    return childNodeFound ? childNodeFound : null;
};
export const findChildNodeValue = (fromNodeList, childNodeName) => {
    var _a, _b;
    const predicate = (childNode) => childNode.nodeName === childNodeName || childNode.nodeName.match(childNodeName) !== null;
    let value = (_b = (_a = Array.from(fromNodeList).find(predicate)) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.nodeValue;
    value = value !== undefined ? value : null;
    return value === null ? value : Number(value);
};
// Fetch activity track point extensions according https://www8.garmin.com/xmlschemas/ActivityExtensionv2.xsd schema
export const findTrackPointExtensionValue = (childNodes, extensionName) => {
    return findExtensionValue(childNodes, extensionName, 'TPX');
};
// Fetch activity lap extensions according https://www8.garmin.com/xmlschemas/ActivityExtensionv2.xsd schema
export const findLapExtensionValue = (childNodes, extensionName) => {
    return findExtensionValue(childNodes, extensionName, 'LX');
};
export const findExtensionValue = (childNodes, extensionName, namespace) => {
    const trackPointsChild = findChildNode(childNodes, 'Extensions');
    if (!trackPointsChild) {
        return null;
    }
    const tpxChildNode = findChildNode(trackPointsChild.childNodes, new RegExp(`${namespace}$`, 'gi'));
    if (tpxChildNode) {
        const value = findChildNodeValue(tpxChildNode.childNodes, new RegExp(extensionName + '$'));
        return value !== null ? Number(value) : null;
    }
    return null;
};
