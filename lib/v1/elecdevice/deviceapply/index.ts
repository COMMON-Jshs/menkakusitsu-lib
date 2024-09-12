import { ElecDeviceInfo } from "..";
import { DefaultResponse } from "../../..";
import { UserInfo } from "../../user";

export interface GetElecDeviceApplyRequest {
    when: number;
}

export interface GetElecDeviceApplyResponse extends DefaultResponse {
    deviceInfo: ElecDeviceInfo;
}

export interface PostElecDeviceApplyRequest {
    teacherUid: number;
    applicants: UserInfo[];
    deviceId: number;
    purpose: string;
    when: number;
}

export interface PostElecDeviceApplyResponse extends DefaultResponse {
    // specialroomInfo: SpecialroomInfo,
}

export interface DeleteElecDeviceApplyRequest {
    when: number;
}

export interface DeletElecDeviceApplyResponse extends DefaultResponse {
    // specialroomInfo: SpecialroomInfo,
}
