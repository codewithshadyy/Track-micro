

const pool = require("../db")

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