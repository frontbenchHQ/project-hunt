import axios from 'axios';

async function getAllProjects() {
    let response = await axios.get('https://projecthunt-api.herokuapp.com/project')
        .catch(error => { console.log(error) })

    return response;
}

function createProject(project) {
    axios.post('https://projecthunt-api.herokuapp.com/project', project)
        .then(response => console.log(response))
        .catch(error => console.log(error))
}

export { getAllProjects, createProject };




