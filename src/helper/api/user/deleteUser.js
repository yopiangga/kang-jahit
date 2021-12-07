import axios from 'axios';

const getDelete = async(url) => {
    
    const response = await axios({
        url: url,
        method: 'delete',
    })

    return response;
}

export default getDelete;
