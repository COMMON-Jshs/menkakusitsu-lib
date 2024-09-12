import { UserInfo } from "../user";

export interface ElecDeviceInfo {
    applyId: number;
    state: number;
    master: UserInfo;
    teacher: UserInfo;
    applicants: string;
    deviceId: number;
    devicename: string;
    purpose: string;
    when: number;
}

export * from "./deviceapply";
export * from "./deviceattendance";
export * from "./deviceinfo";
export * from "./deviceouter";
