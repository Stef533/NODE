import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

app.use(morgan('dev'));

type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

app.get('/api/planets', (req, res) => {
  res.status(200).json(planets)
})

app.get('/api/planets/:id', (req, res) => {
    const {id} = req.params;
    const planet = planets.find(p => p.id === Number(id))
    res.status(200).json(planet)
})

console.log(process.env.PORT)