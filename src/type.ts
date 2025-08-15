import { FieldValue } from "firebase/firestore";

export type TransactionData = {
  userId: string;
  name: string;
  context: string;
  amount: number;
  type: string;
  created: string | FieldValue;
  transactionId?: string
};


export type TargetData = {
  userId:string
  targetName:string
  targetAmount:number
  currentAmount:number
  targetId?: string
}