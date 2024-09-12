import { DefaultResponse } from "../..";

export interface MasterCodeInfo {
    id: number;
    codeType: string;
    codeId: string;
    codeName: string;
    bigo:string;
}

export interface GetCodeRequest {
    codetype: string;
}

export interface GetCodeResponse {
    status: number;
    message: string;
    mastercodeinfo : MasterCodeInfo[];
}