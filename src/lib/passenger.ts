export const createPassenger = (adult:number, child:number) => {
    try{
        const passengers = []

        for (let i = 0; i< adult; i++){
            passengers.push({
                type: 'adult'
            })
        }

        for (let i = 0; i< child; i++){
            passengers.push({
                type: 'child'
            })
        }

        return passengers

    }catch(err){
        return []
    }
}