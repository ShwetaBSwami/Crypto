import Axios from 'axios';
import { debug } from 'util';

let _singleton = null;

class APIService {
    constructor() {
        if (!_singleton) {
            _singleton = this;
        } else {
            return _singleton;
        }
    }

    get(url) {
        try {
            return Axios({
                method: 'get',
                url,
                headers: this.getHeader()
            });
        } catch (err) {
            return err;
        }
    }
    post = (url, params, headers) => {
        try {
            return Axios({
                method: 'post',
                url,
                headers,
                data: params
            });
        } catch (err) {
            return err;
        }
    }
getHeader = () =>{
    
}
  

}

export default Object.freeze(new APIService());
