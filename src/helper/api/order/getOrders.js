import axios from 'axios';

const getOrders = async(url) => {
    
    const response = await axios({
        url: url,
        method: 'GET',
    })

    return response;
}

export default getOrders;
