export class IDClass {
    getID() {
        return this.id || null;
    }
    setID(id) {
        this.id = id;
        return this;
    }
}
