export interface LoginRequestDto {
    email: string;
    password: string;
}

export interface AuthReponse {
    accessToken: string;
}
