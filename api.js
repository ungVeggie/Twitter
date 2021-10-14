import axios from 'axios';

class API {

    static async index(skip = 0, limit = 0, sort = [{ createdAt: "DESC" }], where = { type: ['tweet', 'retweet'] }) {
        const result = await axios({
            method: "get",
            url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
            withCredentials: true
        })
        return result;
    }

    static async create({message, type, id}) {
        let result = await axios({
            method:'post',
            url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
            responseType: "json",
            params: {
                body: message,
                type: type,
                parent: id,
            },
            withCredentials: true
        })
        return result;
    }

    static async read(id) {
        let result = await axios({
            method: 'get',
            url: `https://comp426-1fa20.cs.unc.edu/a09/tweets/${id}`,
            responseType:"json",
            withCredentials:true
        })
        return result;
    }

    static async update(id, message) {
        let result = await axios({
            method: 'post',
            url:`https://comp426-1fa20.cs.unc.edu/a09/tweets/${id}`,
            responseType:"json",
            params: {
                body: message
            },
            withCredentials:true
        })
        return result;
    }

    static async delete(id) {
        let result = await axios({
            method: 'DELETE',
            url: `https://comp426-1fa20.cs.unc.edu/a09/tweets/${id}`,
            responseType:"json",
            withCredentials: true
        });
        return result;
    }

    static async like(id) {
        let result = await axios({
            method: 'put',
            url: `https://comp426-1fa20.cs.unc.edu/a09/tweets/${id}/like`,
            responseType:"json",
            withCredentials: true
        })
        return result;
    }

    static async unlike(id) {
        let result = await axios({
            method:'put',
            url: `https://comp426-1fa20.cs.unc.edu/a09/tweets/${id}/unlike`,
            responseType:"json",
            withCredentials: true
        })
        return result;
    }

}

export default API;
