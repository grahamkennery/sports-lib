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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const importer_suunto_json_1 = require("./importer.suunto-json");
describe('EventImporterSuuntoJSON Integration', () => {
    // Go up 5 levels from src/events/adapters/importers/suunto -> sports-lib root
    const samplesDir = path.resolve(__dirname, '../../../../../samples/suunto');
    it('should parse all sample suunto json files', () => __awaiter(void 0, void 0, void 0, function* () {
        if (!fs.existsSync(samplesDir)) {
            console.warn(`Samples directory not found at ${samplesDir}. Skipping integration tests.`);
            return;
        }
        const files = fs.readdirSync(samplesDir).filter(f => f.endsWith('.json'));
        if (files.length === 0) {
            console.warn('No .json files found in samples directory.');
            return;
        }
        console.log(`Found ${files.length} .json files to test:`, files);
        for (const file of files) {
            const filePath = path.join(samplesDir, file);
            const fileString = fs.readFileSync(filePath, 'utf-8');
            try {
                // Use getFromJSONString as confirmed by file analysis
                const event = yield importer_suunto_json_1.EventImporterSuuntoJSON.getFromJSONString(fileString);
                expect(event).toBeDefined();
                expect(event.getActivities().length).toBeGreaterThan(0);
                console.log(`✅ Successfully parsed ${file}`);
            }
            catch (error) {
                console.error(`❌ Failed to parse ${file}:`, error);
                throw error;
            }
        }
    }));
    // Note: If SML/XML files existed, we would test EventImporterSuuntoSML here too.
});
