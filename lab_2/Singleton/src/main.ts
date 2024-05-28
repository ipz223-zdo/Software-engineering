import Authenticator from "./authenticator/authenticator";

function main() {
    const authenticator1 = Authenticator.getInstance();
    const authenticator2 = Authenticator.getInstance();

    console.log(authenticator1 === authenticator2); // Output: true

    const isAuthenticated = authenticator1.authenticate("admin", "admin");
    console.log("Is authenticated:", isAuthenticated); // Output: Is authenticated: true
}

main();
