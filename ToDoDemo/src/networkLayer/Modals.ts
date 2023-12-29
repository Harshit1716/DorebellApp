export interface loginRequestType {
    email: string;
    password: String;
}
export interface signUpRequestType {
    email: string;
    password: string;
    last_name: string
    first_name: any,
}
export interface LoginResponse {
    data: LoginResponseData;
    error: null;
    hasError: boolean;
    message: string;
}

export interface LoginResponseData {
    email: string;
    first_name: string;
    id: number;
    last_login: Date;
    last_name: string;
    sessionId: string;
    status: string;
    token: string;
}
