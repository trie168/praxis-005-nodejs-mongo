const Book = require("../models/book");

const create = async req => {
    let { title, description, price } = req.body;
    price = parseInt(price);
    var insert_data = {
        title,
        description,
        price
    };

    let data = new Book(insert_data);

    try {
        await data.save();

        return data;
    } catch (err) {
        throw err;
    }
};

const getAll = async () => {
    try {
        let query = await Book.find({}).exec();
        let data = query.map((v, i) => {
            return {
                title: v.title,
                description: v.description,
                price: v.price
            };
        });

        return data;
    } catch (err) {
        throw err;
    }
};

const getDetail = async id => {
    try {
        let query = await Book.findOne({
            _id: id
        }).exec();

        return query;
    } catch (err) {
        throw err;
    }
};

const update = async (id, updated_data) => {
    let { title, description, price, fresh } = updated_data;
    let opts = {
        new: fresh === "true" ? true : false
    };
    let data = {
        title,
        description,
        price
    };

    try {
        let query = await User.findOneAndUpdate(
            {
                _id: id
            },
            data,
            opts
        ).exec();

        return query;
    } catch (err) {
        throw err;
    }
};

const destroy = async id => {
    try {
        let query = await User.findOneAndDelete({
            _id: id
        }).exec();

        return query;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    create,
    getAll,
    getDetail,
    update,
    destroy
};

// const Book = require("../models/book");
// const { isInteger } = require("lodash");

// const create = req => {
//     let { title, description, price } = req.body;
//     price = parseInt(price);
//     console.log(`Value of price ${price}`);

//     if (isInteger(price) === false) {
//         return "Wrong type of `price`";
//     }

//     var insert_data = {
//         title,
//         description,
//         price
//     };

//     let data = new Book(insert_data);
//     data.save();

//     return data;
// };

// const getAll = async () => {
//     let query = await Book.find({}).exec();
//     console.log(`Result ${query}`);

//     return query;
// };

// module.exports = {
//     create,
//     getAll
// };
