import axios from 'axios';

//function to var
//return urlprefix
//import axios to folder
//export functions
//export server url

var urlPrefix = 'http://10.2.24.38:3001/api';
var serverUrl = 'http://10.2.24.38:3001/';

var getProjects = () => {
    return axios.get(urlPrefix+'/projects')
}

var getSingleProject = (id) => {
    return axios.get(urlPrefix+'/projects/'+id)
}

var getTypes = () => {
    return axios.get(urlPrefix+'/types')
}

var getSingleType = (id) => {
    return axios.get(urlPrefix+'/types/'+id)
}

var addProjects = (data) => {
    return axios.post(urlPrefix+'/projects',data)
}

var updateProjects = (id,data) => {
    return axios.put(urlPrefix+'/projects/'+id,data)
}

var deleteProjects = (id) => {
    return axios.delete(urlPrefix+'/projects/'+id)
}

var authenticate = (data) => {
    return axios.post(urlPrefix+'/authenticate',data)
}

var getSingleUser = (id) => {
    return axios.get(urlPrefix+'/users/'+id)
}

export {serverUrl, getProjects, getSingleProject, getTypes, addProjects, updateProjects, deleteProjects, getSingleType, authenticate, getSingleUser}