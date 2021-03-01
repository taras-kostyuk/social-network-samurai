import axios from "axios";


const instance = axios.create ( {
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"8dc404ff-3523-492a-9e90-857619657bf6"
    }
})
export const usersAPI = {
   getUsers (currentPage:number = 1,pageSize:number = 10 )  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId:number) {
       return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)},
    unFollow(userId:number) {
      return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }


}

// export const getUsers2 =(currentPage:number = 1,pageSize:number = 10 ) => {
//    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//        .then(response => {
//            return response.data
//        })
// }
