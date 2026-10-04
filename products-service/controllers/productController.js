

const pool = require("../db")



exports.createProduct = async (req, res) => {

    try {

        const {name, price} = req.body

      if(!name && !price){
        return res.status(400).json({
            success:false,
            message:"Sorry name and price are required"
        })
      }

     const queryText = `INSERT INTO products (name, price) VALUES(\$1, \$2, \$3) returning*`
     const text = 

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
    
}
exports.getProducts = async (req, res) => {

    try {


        const products =  await pool.query(
            "SELECT * FROM products"
        )
        if(products.rowCount == 0){
            return res.status(404).json({
                success:false,
                message:"oops no product found"
            })
        }

        return res.status(200).json({
            success:true,
            data:products.rows
        })
        
    } catch (error) {

        return res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
    
}