import APIService from './APIService';

export const fetchApi = async params => {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',

    };
    const res = await APIService.get('http://demo8808209.mockable.io/');
    

    return res.data.data;
};
