const Duty = require("../models/Duties");

exports.list = async (req, res) => {
  try {
    const dutieslist = await Duty.find();
    console.log(dutieslist);
    res.render("dutylist", { dutieslist: dutieslist });
  } catch (error) {
    res.status(404).send({ message: "could not list the duties." });
  }
};

exports.create = async (req, res) => {
  const duty = Duty(req.body);
  const dutySaved = await duty.save();
  console.log(dutySaved);
  res.redirect("/");
};

exports.update = async (req, res) => {
  try {
    const dutyupdate = await Duty.findById(req.params.id).lean();
    res.render("update", { dutyupdate: dutyupdate });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateDuty = async (req, res) => {
  const { id } = req.params;
  await Duty.findByIdAndUpdate(id, req.body);
  res.redirect("/dutylist");
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Duty.findByIdAndDelete(id);
  res.redirect("/dutylist");
};

exports.dutyStatus = async (req, res) => {
  const { id } = req.params;
  const dutystatus = await Duty.findById(id);
  dutystatus.done = !dutystatus.done;
  await dutystatus.save();
  res.redirect("/dutylist");
};
