export interface LoginDto {
    email: string;
    password: string;
}

export interface ResetPasswordDto {
    email: string;
}

export interface RegisterDto {
    username: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    id: string;
    username: string;
    email: string;
    role: 'USER' | 'ADMIN';
}
