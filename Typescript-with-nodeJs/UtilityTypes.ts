
type Staff = {
    id: string;
    age: number;
    username: string; 
    email: string;
    password: string;
}

type StaffWithoutPassword = Pick<Staff, "id" | "age" | "username" | "email">;

//or below for simplicity
type StaffsWithoutPassword = Omit<Staff, "password">;

//or for options. all parameters are optional
type StaffWithOptions = Partial<Staff>; 

//or for required: all paramers are required
type StaffRequired = Required<Staff>;

// Example usage:
const staffMember: Staff = {
    id: "staff-001",
    age: 30,
    username: "john_doe",
    email: "john.doe@example.com",
    password: "securepassword123"
};

const staffDetails: StaffWithoutPassword = {
    id: staffMember.id,
    age: staffMember.age,
    username: staffMember.username,
    email: staffMember.email
};

console.log(staffDetails);
