import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';
import { recipeRouter }  from './routes/recipes.js'
const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);
app.use("/recipes",recipeRouter);
mongoose.connect('mongodb+srv://mahijith:myrecipeapp@recipes.cl7hujc.mongodb.net/recipes?retryWrites=true&w=majority');
app.listen(3001, () => console.log('Server started on port 3001'));