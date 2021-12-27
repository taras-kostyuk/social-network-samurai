import axios from "axios";


const instance = axios.create ( {
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"e76ae89f-2b63-4c33-a355-f19d1baa6c4d"
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
      return instance.delete(`follow/${userId}`)
    },
    getProfile(userId:number){
       console.warn('Obsolete method. Please use profileAPI object')
       return profileAPI.getProfile(userId)

    }


}
export const profileAPI = {
    getProfile(userId:number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:string) {
        return instance.put(`profile/status`, {status} )
    }
}

export const authAPI = {
    me () {
        return  instance.get(`auth/me`)},
    login(email:string,password:string,rememberMe:boolean = false){
        return instance.post(`auth/login`,{email,password,rememberMe})
        },
    logout(){
        return instance.delete(`auth/login`,)
    }
}

// export const getUsers2 =(currentPage:number = 1,pageSize:number = 10 ) => {
//    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//        .then(response => {
//            return response.data
//        })
// }
