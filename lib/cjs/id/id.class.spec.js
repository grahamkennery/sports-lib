"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdClass = void 0;
const id_abstract_class_1 = require("./id.abstract.class");
describe('IDClass', () => {
    let idClass;
    beforeEach(() => {
        idClass = new IdClass();
    });
    it('should correctly set an ID', () => {
        idClass.setID('123');
        expect(idClass.getID()).toBe('123');
    });
});
class IdClass extends id_abstract_class_1.IDClass {
}
exports.IdClass = IdClass;
