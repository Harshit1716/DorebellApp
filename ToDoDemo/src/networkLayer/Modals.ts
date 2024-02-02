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

export interface SignUpResponse {
    data: SignUpResponseData;
    error: null;
    hasError: boolean;
    message: string;
}

export interface SignUpResponseData {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    token: string;
}

export interface ForgetPasswordResponse {
    data: null;
    error: null;
    hasError: boolean;
    message: string;
}

export interface UserDataResponse {
    data: UserData;
    error: null;
    hasError: boolean;
}

export interface UserData {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    platform: string;
    is_social: string;
    language: string;
    country: string;
    currency: string;
    picture: string;
    password: string;
    reset_password_token: null;
    status: string;
    reset_password_expires: null;
    dob: null;
    mobile: null;
    deviceToken: null;
    source: null;
    deviceId: null;
    lat: null;
    long: null;
    session_id: string;
    last_login: Date;
    createdAt: Date;
    updatedAt: Date;
}
