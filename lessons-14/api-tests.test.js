const axios = require('axios')


describe("API tests", () => {
    test("Get all posts list", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(response.status).toEqual(200);
        expect(response.data).not.toEqual('');
    })

    test("Get all users list", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(response.status).toEqual(200);
        expect(response.data).not.toEqual('');
    })

    test("Get post with id = 5", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/5', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(response.status).toEqual(200);
        expect(response.data.id).toEqual(5);
    })

    test("Check user name for id = 1", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(response.status).toEqual(200);
        expect(response.data.name).toEqual('Leanne Graham');
    })

    test("Create new todos", async () => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Create a few API test',
                body: 'All for a lessons 14',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        
        expect(response.status).toEqual(201);
        expect(response.data.id).toEqual(101);
    })

     test("Update title for post id=17", async () => {
        const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/17', {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'NEW TITLE'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        
        expect(response.status).toEqual(200);
    })
})

