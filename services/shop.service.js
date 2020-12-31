const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}

module.exports.AllData= shop=>{
    return Shop.find(shop);
}

module.exports.getById= (singleId) => {
    return Shop.findById(singleId);
}

module.exports.updateById=(updateId, updatedData, validators)=>{
    return Shop.findByIdAndUpdate(updateId, updatedData, validators);

}

module.exports.deleteById=(id)=>{
    return Shop.findByIdAndDelete(id);
}