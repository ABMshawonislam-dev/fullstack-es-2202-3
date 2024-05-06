const Category = require('../model/categoryModel')

let addCategorycontroller = async (req, res)=>{
    const {name} = req.body;
    console.log(name.toLowerCase().trim()); //you have use trim() sothat space is not count in category name. or not use trim() space is count in category name.

    const existingCategory = await Category.find({name: name.toLowerCase().trim()});

    if(existingCategory.length > 0 ){
        res.send({error: 'category already exist'})
    }
    else{
        let category = new Category({
            name: name.toLowerCase()
        })
        category.save();
        res.send({success: "Category is created"})
    }
}

module.exports = addCategorycontroller;