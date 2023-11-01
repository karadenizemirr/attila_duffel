import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: "text", placeholder: "Email" },
                password: { label: 'Password', type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                // Login Controller 

                try{
                    const res = await fetch(process.env.NEXT_PUBLIC_API + '/user/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    })
    
                    const { ok, user } = await res.json()
    
                    if (ok) {
                        return user
                    } else {
                        return null
                    }
                }catch(err){
                    console.log(err)
                    return null
                }
            },
        })
    ],
    pages: {
        signIn: '/login'
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60
    },
    callbacks: {
        async session({session,token}: {session:any, token:any}){
            session.jwt = token.jwt
            session.user.id = token.id
            return Promise.resolve(session)
        },

        async jwt({token,user}:{token:any, user:any}){
            if (user){
                token.id = user.id
            }

            return Promise.resolve(token)
        }
    }
}

export default NextAuth(authOption)