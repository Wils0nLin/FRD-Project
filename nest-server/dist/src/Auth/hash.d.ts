export declare function hashPassword(plainPassword: string): Promise<string>;
export declare function checkPassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
