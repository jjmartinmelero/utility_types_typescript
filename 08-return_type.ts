

const createAuthResponse = (success: boolean) => {
    if (success) {
        const token = crypto.randomUUID();
        return { status: 200, token } as const;
    }

    return { status: 401, error: "Unauthorized" } as const;
}

const response = createAuthResponse(true);

type AuthResponse = ReturnType<typeof createAuthResponse>;

const authResponse: AuthResponse = {
    status: 200,
    token: "123asdasd-asdasdasd-asdasdads-asdadsasd-asdadsa"
};