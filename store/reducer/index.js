const STATE_INITIAL={
    users:[{
        name:'zameer ali tunio',
        email:'zameeralitunio@gmail.com',
    },
    {
        name:'Asad khan',
        email:'asadkhan@gmail.com',
    }]
}
export default(state=STATE_INITIAL,action)=>{
    switch(action.type){
        case "SetData":
            return({
                ...state,
                users:[...state.users,action.data]
            })
            default:
                 return state;
    }
}