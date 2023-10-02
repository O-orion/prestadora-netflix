import { Status } from "../enums/Status";

export interface IFeedback {
  status: Status.SUCESSO | Status.FALHA
}
