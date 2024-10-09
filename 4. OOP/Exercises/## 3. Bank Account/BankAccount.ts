class BankAccount {
    private static idCounter = 1;
    private static globalInterestRate = 0.02;
    private id: number; 
    private balance: number;

    constructor() {
        this.id = BankAccount.idCounter++;
        this.balance = 0;
    }

    public static setInterestRate(rate: number): void {
        BankAccount.globalInterestRate = rate;
    }
    
    public getInterest(years: number): number {
        return this.balance * BankAccount.globalInterestRate * years;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public getId(): number {
        return this.id;
    }

    public getBalance(): number {
        return this.balance;
    }
}

function main() {
    const accounts: { [key: number]: BankAccount } = {}; 
    let accountCount = 0; 

    const commands = [
        "Create",
        "Deposit 1 20",
        "GetInterest 1 10",
        "End",
        "Create",
        "Create",
        "Deposit 1 20",
        "Deposit 3 20",
        "Deposit 2 10",
        "SetInterest 1.5",
        "GetInterest 1 1",
        "GetInterest 2 1",
        "GetInterest 3 1",
        "End"
    ];

    for (const command of commands) {
        const parts = command.split(" ");
        const cmd = parts[0];

        switch (cmd) {
            case "Create":
                const newAccount = new BankAccount();
                accounts[newAccount.getId()] = newAccount;
                console.log(`Account ID${newAccount.getId()} created`);
                accountCount++;
                break;

            case "Deposit":
                const depositId = parseInt(parts[1], 10);
                const amount = parseFloat(parts[2]);

                if (accounts[depositId]) {
                    accounts[depositId].deposit(amount);
                    console.log(`Deposited ${amount} to ID${depositId}`);
                } else {
                    console.log(`Account does not exist`);
                }
                break;

            case "SetInterest":
                const interestRate = parseFloat(parts[1]);
                BankAccount.setInterestRate(interestRate);
                break;

            case "GetInterest":
                const interestId = parseInt(parts[1], 10);
                const years = parseInt(parts[2], 10);

                if (accounts[interestId]) {
                    const interest = accounts[interestId].getInterest(years);
                    console.log(interest.toFixed(2));
                } else {
                    console.log(`Account does not exist`);
                }
                break;

            case "End":
                return;
        }
    }
}

main();

