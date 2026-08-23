export interface RegisterRequestDto {
    name: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    accessToken: string;
}
