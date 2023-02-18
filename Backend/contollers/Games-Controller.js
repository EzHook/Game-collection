const Game = require("../model/gameInfo");

const getAllGames = async (req, res, next) => {
    let Games;
    try {
        Games = await Game.find();
    } catch (error) {
        console.log(error);
    }

    if(!Games) {
        return res.status(404).json({message:"Games are not found"})
    }
    return res.status(200).json({Games});
};

const getById = async (req, res, next) => {
    const id = req.params.id;
        let game;
        try {
            game = await Game.findById(id)
        } catch (error) {
            console.log(error)
        }
        if(!game) {
            return res.status(500).json({message:"No Game found"});
        }
        return res.status(201).json({game});
}


const addGame = async (req, res, next) => {
    const{name, developer, description, price, availability, image} = req.body;
    let game;
    try {
        game = new Game({
            name,
            developer,
            description,
            price,
            availability,
            image
        });
        game.save();
    } catch (error) {
        console.log(error)
    }
    if(!game) {
        return res.status(500).json({message:"Unable to add"});
    }
    return res.status(201).json({game});
};

const updateGame = async (req, res, next) => {
    const id = req.params.id;
    const{name, developer, description, price, availability, image} = req.body;
    let game;

    try {
        game = await Game.findByIdAndUpdate(id, {
            name,
            developer,
            description,
            price,
            availability,
            image
        });
        game = await game.save();
    } catch (error) {
        console.log(error);
    }
    if(!game) {
        return res.status(404).json({message:"Unable to update item by entered ID"});
    }
    return res.status(201).json({game});
};

const deleteGame = async (req, res, next) => {
    const id = req.params.id;
    let game;
    try {
        game = await Game.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
    if(!game) {
        return res.status(404).json({message:"Unable to delete item by entered ID"});
    }
    return res.status(200).json({message:"Game Successfully Deleted"});
};

exports.getAllGames = getAllGames;
exports.addGame = addGame;
exports.getById = getById;
exports.updateGame = updateGame;
exports.deleteGame = deleteGame;