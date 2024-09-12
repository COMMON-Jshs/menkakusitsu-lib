import { DefaultResponse } from "../../..";

export interface GetAttendanceElecDeviceInfoRequest {}

export interface GetAttendanceElecDeviceInfoResponse extends DefaultResponse {
    info: string[];
}

export interface GetAttendanceElecDeviceListRequest {
    when: number;
}

export interface AttendanceElecDeviceList {
    big: string[][];
    small: string[][];
}

export interface GetAttendanceElecDeviceListResponse extends DefaultResponse {
    list: AttendanceElecDeviceList;
}
