import { UploadFile } from "antd/lib/upload/interface";
import { NomadaResp } from "./nomada-resp";
import { IUI } from "./ui";

export interface SearchState{
    image: string;
    nomadaResp: NomadaResp;
    fileList: UploadFile<any>[]
    ui: IUI
}