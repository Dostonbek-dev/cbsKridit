export class ProductModel {
  constructor(
    public regNumber: string,
    public Status: string,
    public clientID: string,
    public clientName: string,
    public clientType: string,
    public Amount: string,
    public loanDate: string,
    public loanMaturityDate: string,
    public Currency: string,
    public interestRate: string,
    public loanType: string,
    public loanPurpose: string
  ) {
  }
}
