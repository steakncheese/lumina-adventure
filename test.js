function north() {
  x--;
  return `You are located at: (${x}, ${y})`;
}

app.get("/north", (request, response) => {
  response.send(north());
});
