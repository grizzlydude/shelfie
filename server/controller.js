module.exports = {
    createProduct: async (req, res) => {
        let dbInstance = req.app.get('db')
        let createAProduct = await db.create_products(req.body)
            .catch(err => {
                res.sendStatus(500)
            })
        res.status(201).send(createAProduct)
    },
    getOneProduct: (req, res) => {
        let dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.get_one_product(id).then(() => {
            res.sendStatus(200).send(shelfie)
        }).catch(err => {
            res.status(500).send({ errorMessage: "Data not found. We have been made aware of the issue" })
            console.log(err)
        })
    },
    getAllProducts: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_all_products().then(allItems =>
            res.status(200).send(allItems)).catch(err =>
                res.sendStatus(500))
    },
    updateProducts: (req, res) => {
        const dbInstance = req.app.get('db')
        const { params, query } = req

        dbInstance.update_product([params.id, query.desc]).then(() => {
            res.sendStatus(200).send(shelfie)
        }).catch(err => {
            res.status(500).send({ errorMessage: "Data not found. We have been made aware of the issue" })
            console.log(err)
        })
    },
    deleteProducts: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.delete_product(id).then(() => {
            res.sendStatus(200).send(product)
        }).catch(err => {
            res.status(500).send({ errorMessage: "Data not found. We have been made aware of the issue" })
            console.log(err)
        })
    }
}
