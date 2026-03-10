export function calculateTax(price:number,tax:number){

    // wrong formula
    return price * tax
}

export function getUserName(user:any){

    // potential undefined error
    return user.name.toUpperCase()
}

export function filterUsers(users:any[]){

    // inefficient loop
    let result:any[] = []

    for(let i=0;i<users.length;i++){
        if(users[i].active == true){
            result.push(users[i])
        }
    }

    return result
}
