import mongoose from "../db.js";

const MenuSchema = new mongoose.Schema({
    title: String,
    linkTitle: String,
});

const Menu = mongoose.model("menuInfo", MenuSchema, "menuInfo");


export default Menu;