import { DefaultResponse } from "../../..";
import { UserInfo } from "../../user";

export interface OuterStudentElecDeviceInfo {
    student: UserInfo;
    reason: string;
    until?: number;
}

export interface GetOuterStudentElecDeviceInfoRequest {}

export interface GetOuterStudentElecDeviceInfoResponse extends DefaultResponse {
    outerStudentInfo: OuterStudentElecDeviceInfo[];
}

export interface PostOuterStudentElecDeviceInfoRequest {
    outerStudentInfo: OuterStudentElecDeviceInfo;
}

export interface PostOuterStudentElecDeviceInfoResponse extends DefaultResponse {}

export interface DeleteOuterStudentElecDeviceInfoRequest {
    studentUid: number;
}

export interface DeleteOuterStudentElecDeviceInfoResponse extends DefaultResponse {}
