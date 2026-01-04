"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findExtensionValue = exports.findLapExtensionValue = exports.findTrackPointExtensionValue = exports.findChildNodeValue = exports.findChildNode = void 0;
const findChildNode = (fromNodeList, childNodeName) => {
    const childNodeFound = Array.from(fromNodeList).find((childNode) => {
        return childNode.nodeName === childNodeName || childNode.nodeName.match(childNodeName) !== null;
    });
    return childNodeFound ? childNodeFound : null;
};
exports.findChildNode = findChildNode;
const findChildNodeValue = (fromNodeList, childNodeName) => {
    var _a, _b;
    const predicate = (childNode) => childNode.nodeName === childNodeName || childNode.nodeName.match(childNodeName) !== null;
    let value = (_b = (_a = Array.from(fromNodeList).find(predicate)) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.nodeValue;
    value = value !== undefined ? value : null;
    return value === null ? value : Number(value);
};
exports.findChildNodeValue = findChildNodeValue;
// Fetch activity track point extensions according https://www8.garmin.com/xmlschemas/ActivityExtensionv2.xsd schema
const findTrackPointExtensionValue = (childNodes, extensionName) => {
    return (0, exports.findExtensionValue)(childNodes, extensionName, 'TPX');
};
exports.findTrackPointExtensionValue = findTrackPointExtensionValue;
// Fetch activity lap extensions according https://www8.garmin.com/xmlschemas/ActivityExtensionv2.xsd schema
const findLapExtensionValue = (childNodes, extensionName) => {
    return (0, exports.findExtensionValue)(childNodes, extensionName, 'LX');
};
exports.findLapExtensionValue = findLapExtensionValue;
const findExtensionValue = (childNodes, extensionName, namespace) => {
    const trackPointsChild = (0, exports.findChildNode)(childNodes, 'Extensions');
    if (!trackPointsChild) {
        return null;
    }
    const tpxChildNode = (0, exports.findChildNode)(trackPointsChild.childNodes, new RegExp(`${namespace}$`, 'gi'));
    if (tpxChildNode) {
        const value = (0, exports.findChildNodeValue)(tpxChildNode.childNodes, new RegExp(extensionName + '$'));
        return value !== null ? Number(value) : null;
    }
    return null;
};
exports.findExtensionValue = findExtensionValue;
