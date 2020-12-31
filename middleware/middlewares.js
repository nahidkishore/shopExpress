module.exports.first=function(req,res,next){
console.log('first middleware');
next();
}
module.exports.second=function(req,res,next){
  console.log('second middleware');
  next();
}
module.exports.third=function(req,res,next){
  console.log('third middleware');
  next();
  res.send('done bro, yah!!!!!!!')
}