export declare abstract class LibError extends Error {
    abstract readonly code: string;
    protected constructor(message: string);
}
