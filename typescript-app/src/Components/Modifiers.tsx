type Salary = {
    readonly base: number;
    readonly bonus: number;
    commission?: number;
}

function calculateTotalSalary(salary: Salary): number {
    let total = salary.base + salary.bonus;
    if (salary.commission) {
        total += salary.commission;
    }
    return total;
}

export default calculateTotalSalary;

//As Const & Object.freeze

export const salary: Salary = Object.freeze({
    base: 50000,
    bonus: 5000,
    commission: 2000
});

export function getSalaryDetails(): string {
    const total = calculateTotalSalary(salary);
    return `Base Salary: ${salary.base}, Bonus: ${salary.bonus}, Commission: ${salary.commission ?? 0}, Total Salary: ${total}`;
}

const color = ["red", "green", "blue"] as const;
// color.push("yellow"); // This will cause a TypeScript error because `color` is a readonly array