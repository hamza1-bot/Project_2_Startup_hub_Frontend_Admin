import axios from "axios";


const base_url='http://localhost:8010/StartupHub/api/'


export const friendsService={
    loginApi,
    friends_list_api
}


function loginApi(payload) { 
    return axios.post(base_url + 'adminLogin/', payload);
}

function friends_list_api(){
    return axios.post(base_url +'getfriends/', {});
}