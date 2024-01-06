import { Request, Response } from "express"
import Joi from 'Joi'
import {db} from './../db.js'

const getAll = async (req : Request, res : Response) => {
    const planets = await db.many( `SELECT * FROM planets`)
    res.status(200).json(planets)
  }

const getOneById = async (req : Request, res : Response) => {
    const {id} = req.params;
    const planet = await db.one(`SELECT * FROM planets WHERE id=$1`, Number(id))
    res.status(200).json(planet)
}

const planetSchema = Joi.object({
    id : Joi.number().integer().required(),
    name : Joi.string().required()
})

const create = (req : Request, res : Response) => {
    const {id, name} = req.body;
    const newPlanet = {id : id, name};
    const validateNewPlanet = planetSchema.validate(newPlanet)

    if (validateNewPlanet.error) {
        return res
        .status(400)
        .json( {msg : validateNewPlanet.error.details[0].message})
    } else {
        db.none(`INSERT INTO plantes (name) VALUES ($1)`)
        res.status(201).json({msg : 'Planets was created'})
    }
} 

const updateById = (req : Request, res : Response) => {
    const {id} = req.params
    const {name} = req.body
    db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name])
    res.status(200).json({ msg: "The planet was updated." })
}

const deleteById =  (req : Request, res : Response) => {
    const {id} = req.params;
    db.none(`DELETE FROM planets WHERE id=$1 `)
    res.status(200).json({ msg: "The planet was deleted" })
}


const createImage = async(req : Request, res : Response) => {
    console.log(req.file);
    const{id} = req.params;
    const fileName = req.file?.path;

    if (fileName) {
        db.none(`UPDATE planets SET image=$2 WHERE id=$1` , [id, fileName])
        res.status(201).json( {msg: 'planet image uploaded seccessfully'})

    } else {
        res.status(400).json({ msg : 'Image dont uploaded'})
    }
}


export {getAll, getOneById, create, updateById, deleteById, createImage}