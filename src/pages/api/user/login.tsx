import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from 'bcrypt';

export default async function POST(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method !== 'POST') return res.status(405).json({ ok: false });        
        // User Control

        const userControl = await prisma.user.findUnique(
            {
                where: {
                    email: req.body.email
                }
            }
        )

        if (userControl){
            // User Found
                // Passpowrd Control
            const passwordControl = bcrypt.compareSync(req.body.password, userControl.password)

            if (passwordControl){
                
                return res.status(200).json({ ok: true, user: userControl });
            }else{
                return res.status(500).json({ ok: false });
            }
        }

        return res.status(500).json({ ok: false });
    }catch(err){
        return 
    }
}