export type TransactionData = {
  userId: string;
  name: string;
  context: string;
  amount: number;
  type: string;
  transactionId: string;
  created: string;
};


export type TargetData = {
  userId:string
  targetName:string
  targetAmount:number
  currentAmount:number
}