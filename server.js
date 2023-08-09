import app from "./src/app.js";
const PORT = process.env.PORT;

app.listen(8080, () => {
  console.log(`Server is running on ${PORT}`);
});
