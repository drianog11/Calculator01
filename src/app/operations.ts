export class Operations {

    static provideResult(firstEntry: number, secondEntry: number, op: string): string {
        switch (op) {
            case '+':
                return Operations.opSum(firstEntry, secondEntry);
            case '-':
                return Operations.opSubtraction(firstEntry, secondEntry);
            case 'X':
                return Operations.opMultiplication(firstEntry, secondEntry);
            case '/':
                return Operations.opDivision(firstEntry, secondEntry);
            case 'Pow':
                return Operations.opExpPower(firstEntry, secondEntry);
            default:
                return 'Please select an operation and click Calculate.';
        }
    }

    static opSum(firstEntry: number, secondEntry: number): string {
        return String(firstEntry + secondEntry);
    }

    static opSubtraction(firstEntry: number, secondEntry: number): string {
        return String(firstEntry - secondEntry);
    }

    static opMultiplication(firstEntry: number, secondEntry: number): string {
        return String(firstEntry * secondEntry);
    }

    static opDivision(firstEntry: number, secondEntry: number): string {
        if (secondEntry == 0) {
            return 'Error: Division by Zero (0).';
        }
        else {
            return String(firstEntry / secondEntry);
        }
    }

    static opExpPower(firstEntry: number, secondEntry: number): string {
        return String(Math.pow(firstEntry, secondEntry));
    }

}