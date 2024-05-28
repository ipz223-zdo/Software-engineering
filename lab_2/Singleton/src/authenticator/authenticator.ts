class Authenticator {
    private static instance: Authenticator;

    private constructor() {
    }

    static getInstance(): Authenticator {
        if (!Authenticator.instance) {
            Authenticator.instance = new Authenticator();
            console.log("Create Authenticator")
        }
        return Authenticator.instance;
    }

    authenticate(username: string, password: string): boolean {
        return username === "admin" && password === "admin";
    }
}

export default Authenticator;
