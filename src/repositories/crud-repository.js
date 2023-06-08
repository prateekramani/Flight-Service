
// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/


const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");
const AppError = require("../utils/errors/app-error");

class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }


    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data)
        if (!response)
            {throw new AppError("Not able to find the response ffor given ID", StatusCodes.NOT_FOUND);}
        return response;
    }

    async getAll() {
        const response = await this.model.findAll()
        return response;

    }

    async update(id, data) { // data - > {col_name : value}
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        })
        return response;
    }
}


module.exports = CrudRepository;