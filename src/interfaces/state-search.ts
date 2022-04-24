import { UploadFile } from "antd/lib/upload/interface";
import { NomadaResp } from "./nomada-resp";
import { IUI } from "./ui";

export interface StateSearch{
    nomadaResp: NomadaResp;
    fileList: UploadFile<any>[]
    ui: IUI
}