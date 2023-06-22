const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");

class DeviceController {
  async create(req, res) {
    try {
      const { name, price, typeId, info } = req.body;

      const foundDevice = await Device.findOne({ where: { name } });
      if (foundDevice) {
        return res.json({ message: "Device already exist" });
      }

      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        typeId,
        img: fileName,
      });

      let resultInfo;
      if (info.length != 0) {
        const parseInfo = JSON.parse(info);

        resultInfo = parseInfo.map((element) => {
          DeviceInfo.create({
            title: element.title,
            description: element.description,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (error) {
      return res.json({ massage: "Device creating Error " + error.message });
    }
  }

  async getAll(req, res) {
    const devices = await Device.findAll();
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
