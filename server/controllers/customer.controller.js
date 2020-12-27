const {Customer} = require("../models/customer.model");

exports.getAllCustmers = async (req, res) => {
  const customer = await Customer.find().sort("name");
  res.status(200).json({
    status: "success",
    data: customer,
  });
};

exports.addCustomer = async (req, res) => {
  const { name,isGold,phone } = req.body;

  let customer = new Customer({ name,isGold,phone });

  customer = await customer.save();

  res.status(201).json({
    status: "success",
    data: customer,
  });
};

exports.updateCustomer = async (req, res) => {
  const { name,isGold,phone } = req.body;
  const { id } = req.params;

  console.log(id)

  await Customer.findByIdAndUpdate(id, { name: name,isGold:isGold,phone:phone }, { new: true }).exec(
    (err, data) => {
      if (err) {
        res.status(404).json({
          status: "fail",
          error: `The request id ${err.value} is not found`,
        });
      } else {
        return res.status(201).json({
          status: "success",
          data: data,
        });
      }
    }
  );
};


exports.deleteCustomer = async(req,res)=>{
    const {id} = req.params
    const customer = await Customer.findOneAndRemove(id)

    if(!customer) return res.status(404).send('The Customer With the given Id is not found')

    res.status(200).json({
        status:'success',
        data:customer
    })
}

exports.getCustomer = async(req,res)=>{
    const {id} = req.params
    return await Customer.findById(id).exec((err,data)=>{
        if(err){
            res.status(404).json({
                status:'fail',
                error:'the genre with the id ${err.value} is not found'
            })
        }else{
            res.status(200).json({
                status:'success',
                data:data
            })
        }
    })
}