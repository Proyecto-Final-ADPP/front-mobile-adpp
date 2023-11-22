import axios from 'axios';

export const callAPI = async (url, config = {}, method = 'GET') => {
    try {
        let fetch = null;

        switch (method.toLowerCase()) {
            case 'post':
                fetch = axios.post;
                break;
            case 'patch':
                fetch = axios.patch;
                break;
            case 'delete':
                fetch = axios.delete;
                break;
            default:
                fetch = axios.get;
                break;
        }

        const response = await fetch(url, config);

        if (response) {
            return response.data;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        
        return false;
    }
}
