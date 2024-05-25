// src\models\repositories\base.repository.js
//import db from '../../../db/db.json'

const db={
    "product": [
        {
            "id": 1,
            "name": "Produto 1",
            "price": 100,
            "categoryid": 1
        },
        {
            "id": 2,
            "name": "Produto 2",
            "price": 200,
            "categoryid": 2
        },
        {
            "id": 3,
            "name": "Produto 3",
            "price": 300,
            "categoryid": 3
        },
        {
            "id": 4,
            "name": "Produto 4",
            "price": 400,
            "categoryid": 4
        },
        {
            "id": 5,
            "name": "Produto 5",
            "price": 500,
            "categoryid": 6 
        },
        {
            "id": 6,
            "name": "Produto 6",
            "price": 600,
            "categoryid": 1
        }
    ],
    "category": [
        {
            "id": 1,
            "name": "Categoria 1"
        },
        {
            "id": 2,
            "name": "Categoria 2"
        },
        {
            "id": 3,
            "name": "Categoria 3"
        },  
        {
            "id": 4,
            "name": "Categoria 4"
        },
        {
            "id": 5,
            "name": "Categoria 5"
        },
        {
            "id": 6,
            "name": "Categoria 6"
        }
    ]
}

export class BaseRepository {    

    constructor(entity) {
        this.entity = entity
        this.db = db
    }

    async getAll() {
        return this.db[this.entity]
    }

    async getById(id) {
        return this.db[this.entity].find((object) => object.id === Number(id))
    }

    async create(data) {
        data.id = this.db[this.entity].length + 1
        this.db[this.entity].push(data)

        return data
    }

    async update(id, data) {
        const index = this.db[this.entity].findIndex((object) => object.id === id)
        this.db[this.entity][index] = data
        return this.db[this.entity][index]
    }

    async erase(id) {
        const index = this.db[this.entity].findIndex((object) => object.id === id)
        this.db[this.entity].splice(index, 1)
        return this.db[this.entity]
    }

    mapObject(object) {
        let newObject = {}
        Object.keys(object).forEach((key) => {
            newObject[key] = object[key]
        })
        return newObject
    }
}