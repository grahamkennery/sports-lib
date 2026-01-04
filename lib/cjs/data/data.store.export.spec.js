"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const data_store_1 = require("./data.store");
describe('DataStore Export Verification', () => {
    const dataDir = __dirname;
    const files = fs.readdirSync(dataDir);
    // Files that are not data classes or should be ignored
    const ignoredFiles = [
        'data.store.ts',
        'data.store.spec.ts',
        'data.store.export.spec.ts',
        'data.interface.ts',
        'data.json.interface.ts',
        'data.position.interface.ts',
        'data.spec.ts',
        'data.ts',
        'data.string.ts',
        'data.number.ts',
        'data.boolean.ts',
        'data.percent.ts',
        'data.array.ts',
        'data.balance.ts' // interface/base
    ];
    files.forEach(file => {
        // Only verify regular TS files related to data
        if (!file.endsWith('.ts') || file.endsWith('.d.ts') || file.endsWith('.spec.ts')) {
            return;
        }
        // Check if file starts with data
        if (!file.startsWith('data')) {
            return;
        }
        if (ignoredFiles.includes(file)) {
            return;
        }
        it(`should export data classes from ${file} in DataStore`, () => {
            const modulePath = path.join(dataDir, file);
            // Verify file exists before requiring to avoid weird errors
            if (fs.existsSync(modulePath)) {
                const moduleExport = require(modulePath);
                Object.keys(moduleExport).forEach(key => {
                    const ExportedItem = moduleExport[key];
                    // Check if it looks like a Data class
                    // 1. It's a function (class constructor)
                    // 2. Name starts with Data
                    // 3. It is not an abstract class (we use a simple heuristic or explicit ignore list if needed)
                    // Simple heuristic: if it has a static 'type' property, it probably should be in DataStore.
                    if (typeof ExportedItem === 'function' && key.startsWith('Data')) {
                        // Check for static 'type' property which usually indicates a concrete data class
                        if (ExportedItem.type) {
                            expect(data_store_1.DataStore[key]).toBeDefined();
                            // verify it points to the same class
                            expect(data_store_1.DataStore[key]).toBe(ExportedItem);
                        }
                        else {
                            // If it doesn't have a 'type', it acts like a base class (e.g. DataQuantity)
                            // We can log it or ignore it.
                            // For now, let's assume if it's named Data*, it might be relevant,
                            // but strictly enforcing presence in DataStore usually requires the 'type' to be useful for the loader.
                        }
                    }
                });
            }
        });
    });
});
