const URI = 'http://10.0.2.2/dummy.json';

export default {
    async fetchUsers() {
        try {
                let response = await fetch(URI);
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}