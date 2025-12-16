
type UserEmail = `${string}@${string}.${string}` | null | undefined;

interface User {
    id: number
    email: UserEmail
}

const users: User[] = [
    { id: 1, email: "user1@gmail.com" },
    { id: 2, email: null },
    { id: 3, email: undefined },
    { id: 4, email: "user4@gmail.com" },
];

function sendNewsletter(user: NonNullable<UserEmail>) {
    console.log(`Sending newsletter to ${user}`);
}

// Type guard function to narrow the type
function isValidEmail(email: UserEmail): email is NonNullable<UserEmail> {
    return email !== null && email !== undefined;
}

users.filter(user => isValidEmail(user.email)).forEach(user => sendNewsletter(user.email!));
