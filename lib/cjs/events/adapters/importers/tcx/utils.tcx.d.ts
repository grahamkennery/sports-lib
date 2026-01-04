export declare const findChildNode: (fromNodeList: NodeListOf<ChildNode>, childNodeName: string | RegExp) => ChildNode | null;
export declare const findChildNodeValue: (fromNodeList: NodeListOf<ChildNode>, childNodeName: string | RegExp) => number | null;
export declare const findTrackPointExtensionValue: (childNodes: NodeListOf<ChildNode>, extensionName: string) => number | null;
export declare const findLapExtensionValue: (childNodes: NodeListOf<ChildNode>, extensionName: string) => number | null;
export declare const findExtensionValue: (childNodes: NodeListOf<ChildNode>, extensionName: string, namespace: string) => number | null;
