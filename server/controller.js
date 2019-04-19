module.exports = {
    getAll : (req, res) => {
        const dbInstance = req.app.get("db");
        
        dbInstance.get_inventory()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    postProduct: (req,res) => {
        const dbInstance = req.app.get("db");
        dbInstance.post_product([req.body.name,req.body.price,req.body.img])
        .then(result => {
            res.status(200).json(result)
        } )
    },
    updatePost : (req,res) => {
        const dbInstance = req.app.get("db");

        dbInstance.update_post([req.params.id, req.body.name,req.body.price,req.body.img])
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({errorMessage: "something wrong with update"})
            console.log(err)
        })
    }
}