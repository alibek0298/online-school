const { app, PORT } = require("./core/app");

app.listen(PORT, () => {
	console.log(`running ${PORT}`);
});
