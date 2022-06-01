const Express = require('express');
const app = Express();
const port = 8088;
app.use(Express.json());
app.post('/messages', (req, res) => {
    console.log(req.body);
    res.send(200);
});
app.listen(port, () => console.log(`The rocket app is running on port ${port}`));
