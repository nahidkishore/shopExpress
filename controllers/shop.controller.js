const shopService = require('../services/shop.service');

module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
};

module.exports.getAll=async (req,res,next)=>{
    try{
        const shop=await shopService.AllData()
        return res.status(200).json(shop);
    }
    catch(err){
        return res.status(500).json({ message: 'Something went wrong'});
    }
};

module.exports.getById= async (req, res, next) => {
    try {
const id = req.params.id;
const singleShop= await shopService.getById(id);
return res.status(200).send(singleShop);
    }
    catch(err){
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.updateById= async (req, res, next) => {
    try{
        const id = req.params.id;
const updatedData = req.body;
const updatedInfo= await shopService.updateById({ _id: id }, updatedData, {
    new: true,
    runValidators: true,
  });
  //await updateById.save()
  return res.status(200).send(updatedInfo);

}
    catch(err){
        return res.status(500).json({ message: 'Something went wrong'});

    }
}

//delete data information

module.exports.deleteById= async (req, res, next) => {
    try {
        const id = req.params.id;
        const singleShop= await shopService.deleteById(id);
        return res.status(200).send(singleShop);
            }
    catch(err){
        return res.status(500).json({ message: 'Something went wrong'});

    }
}