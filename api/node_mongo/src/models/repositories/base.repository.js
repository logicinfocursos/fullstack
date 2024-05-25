// src\models\repositories\base.repository.js
import db from '../../../db/db.json' assert { type: 'json' };
/*
a partir do Node.js v12.20.0, v14.13.0 e v16.0.0, onde o suporte para módulos ES foi estabilizado. Agora, ao importar arquivos JSON em um módulo ES, você precisa incluir a afirmação de importação { type: 'json' }.
*/


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