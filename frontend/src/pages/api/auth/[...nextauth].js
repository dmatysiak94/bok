import NextAuth from 'next-auth'
import CredentialProvider from "next-auth/providers/credentials"
import {session} from "next-auth/core/routes";

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialProvider({
            name: 'credentials',
            async authorize(credentials) {

                console.log('credentials=', credentials)

                const client = await connectToClient();
                const db = client.db();
                const user = await userExists(db, 'users', {email: credentials.email});

                if(!user){
                    // no user with the entered email
                    client.close();
                    throw new Error('No user found!');
                }
                console.log('user= ', user);

                const isValid = await verifyPassword(credentials.password, user.password);

                if(!isValid){
                    client.close();
                    throw new Error('Invalid password! Try again!');
                }

                client.close();

                // authorization succeeded

                // return object that is encoded for JWT token
                return { email: user.email};
            }
        })
    ]
})