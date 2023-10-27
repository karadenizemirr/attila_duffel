import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from 'bcrypt';
import prisma from "@/lib/prisma";

export default async function Register(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') return res.status(405).json({ ok: false });
        // Register Operations
        const { name, surname, email, phone, password } = req.body;
        // Password Encryption

        const passwordHash = bcrypt.hashSync(password, 5);

        // Save Data

        const user = await prisma.user.create({
            data: {
                name: name,
                surname: surname,
                email: email,
                phone: phone,
                password: passwordHash
            }
        })

        if (user) {
            return res.status(200).json({ ok: true });
        }
        return res.status(500).json({ ok: false });

    } catch (err) {
        return res.status(500).json({ ok: false });
    }

}