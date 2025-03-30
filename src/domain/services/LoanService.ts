export class LoanService {
    static canBorrow(currentLoans: number): boolean {
      return currentLoans < 3;
    }
  }
  