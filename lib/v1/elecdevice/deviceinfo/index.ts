import { ElecDeviceInfo } from "..";
import { DefaultResponse } from "../../..";
import { UserInfo } from "../../user";

export interface GetElecDeviceInfoRequest {}

export interface GetElecDeviceInfoResponse extends DefaultResponse {
    information: ElecDeviceInfo[];
}

export interface PutElecDeviceInfoRequest {
    information: ElecDeviceInfo[];
}

export interface PutElecDeviceInfoResponse extends DefaultResponse {
    information: ElecDeviceInfo[];
}

export interface DeviceInfo {
    id: number;
    value: string;
}

export interface GetElecDeviceManagerRequest {
    when: string;
}

export interface GetElecDeviceManagerResponse extends DefaultResponse {
    manager: UserInfo;
}

export interface GetElecDeviceInfoRequest {}

export interface GetElecDeviceInfoResponse extends DefaultResponse {
    locationInfo: DeviceInfo[];
}

export interface PurposeElecDeviceInfo {
    id: number;
    value: string;
}

export interface GetPurposeElecDeviceInfoRequest {}

export interface GetPurposeElecDeviceInfoResponse extends DefaultResponse {
    purposeInfo: PurposeElecDeviceInfo[];
}

export interface GetStudentElecDeviceInfoRequest {}

export interface GetStudentElecDeviceInfoResponse extends DefaultResponse {
    studentInfo: UserInfo[];
}

export interface GetTeacherElecDeviceInfoRequest {}

export interface GetTeacherElecDeviceInfoResponse extends DefaultResponse {
    teacherInfo: UserInfo[];
}
