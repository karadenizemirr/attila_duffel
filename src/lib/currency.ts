
// Default USD

export const calculateCurrency = async (amount:string, currency:string ="USD") => {
    try{
        const base_url = `https://api.exchangeratesapi.io/v1/?access_key=${process.env.NEXT_PUBLIC_EXCHANGE_API}&base=GBP&symbols=${currency}`
        const res = await fetch(base_url, {cache: 'default'})
    }catch(err){
        return 0
    }
}