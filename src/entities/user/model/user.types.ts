export interface User {
    id: string;
    username: string;
    email: string;
    role: 'USER' | 'ADMIN';
}

export type AuthResponse = User;

export interface Profile {
    id: string;
    userId: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
    bio: string | null;
    createdAt: string;
    updatedAt: string;
}
