export interface AuthResponse {
    id: string;
    email: string;
    role: 'USER' | 'ADMIN';
}
