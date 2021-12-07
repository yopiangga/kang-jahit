import axios from 'axios';

const deleteOrder = async(url) => {
    
    const response = await axios({
        url: url,
        method: 'DELETE',
    })

    return response;
}

export default deleteOrder;
