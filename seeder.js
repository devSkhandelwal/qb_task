const axios = require("axios");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const dataModel = require("./models/dataModel");

dotenv.config();
connectDB();

const getDataFromApi = async () => {
  try {
    const res = await axios.get(process.env.DEFAULT_API);
    return res.data;
  } catch (error) {
    console.log(`${error.message}`);
  }
};

const importData = async () => {
  try {
    await dataModel.deleteMany();

    const data = [];
    const dataFromApi = await getDataFromApi();

    for (let key in dataFromApi) {
      data.push(dataFromApi[key]);
    }
    const slicedData = data.splice(0, 10);
    await dataModel.insertMany(slicedData);
    console.log("data imported");
    process.exit();
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1);
  }
};

const destoryData = async () => {
  try {
    await dataModel.deleteMany();

    console.log("data destoryed");
    process.exit();
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destoryData();
} else {
  importData();
}
