export class CRegistryTable{
  constructor(
  public regRequest:number,
  public clientID:number,
  public pledgerCode:number,
  public recordCodeCR:number,
  public borrower:string,
  public pledger:string
  ) {
  }
}
