import { Duffel } from "@duffel/api";

export const duffel = new Duffel({
    token: process.env.NEXT_PUBLIC_DUFFEL_API_KEY as string
})

