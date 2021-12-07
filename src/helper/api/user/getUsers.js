import axios from 'axios';

const getUsers = async(url) => {
    
    const response = await axios({
        url: url,
        method: 'GET',
    })

    return response;
}

export default getUsers;
