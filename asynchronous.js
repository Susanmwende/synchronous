AsynchronousDelayMessage(message,delay){
  new Promise(resolve=>setTimeout(resolve,delay));
    console.log(message)
}

const userIds=['user1','User2','User3']
async function fetchAndLogData(){
    for (const UserId of UserIds){
        try{
            const UserId =await
            getUserData(userId)
            console.log(UserData)
        }catch(error){
            console.error(`error for uset${id}:${error}`)
        }
    }
}
//example 
