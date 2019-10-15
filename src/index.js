const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;



// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are desabled');
//     } else {
//         next();
//     }
// }); // middleware use

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. check back soon!');
// });

app.use(express.json()); // to maek json parse automaticly
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log('Server is up on port: ' + port);
});



// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//     // const task = await Task.findById('5d9cfe320966192056e7eee4');
//     // await task.populate('owner').execPopulate(); // get user profile
//     // console.log(task.owner);

//     const user = await User.findById('5d9cfd0ab684832019c3edc0');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
// }

// main();


// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     console.log(this);
//     return {};
// }

// console.log(JSON.stringify(pet));

