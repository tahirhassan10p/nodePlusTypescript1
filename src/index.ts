import App from './app'

const port = 3000;

App.listen(port, (err:any) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
});