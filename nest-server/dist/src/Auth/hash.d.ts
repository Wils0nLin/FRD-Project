export declare function hashPassword(password: string): Promise<string>;
export declare function comparePassword(password: string, password_hash: string): Promise<boolean>;
