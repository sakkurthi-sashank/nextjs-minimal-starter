import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Account = {
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp | null;
};
export type Session = {
    sessionToken: string;
    userId: string;
    expires: Timestamp;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp | null;
};
export type User = {
    id: string;
    name: string | null;
    email: string;
    emailVerified: Timestamp | null;
    image: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp | null;
};
export type VerificationToken = {
    identifier: string;
    token: string;
    expires: Timestamp;
};
export type DB = {
    Account: Account;
    Session: Session;
    User: User;
    VerificationToken: VerificationToken;
};
