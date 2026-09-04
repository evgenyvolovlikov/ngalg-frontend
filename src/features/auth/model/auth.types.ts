export interface LoginDto {
    email: string;
    password: string;
}

export interface ResetPasswordDto {
    email: string;
}

export interface RegisterDto {
    email: string;
    password: string;
}

export interface AuthResponse {
    id: string;
    email: string;
    role: 'USER' | 'ADMIN';
}
