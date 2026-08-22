export interface ApiResponse<T> {
    data: T;
    message?: string;
    timestamp: string;
}

export interface ApiErrorResponse {
    message: string;
    statusCode: number;
    errors?: Record<string, string[]>;
}
