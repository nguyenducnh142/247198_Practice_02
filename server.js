const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [
  {
    username: "user1",
    fullname: "Nguoi thu 1",
    role: "Admin",
    project: ["prj1"],
    activeYn: "Y",
  },
  {
    username: "user2",
    fullname: "Nguoi thu 2",
    role: "Developer",
    project: ["prj1", "prj2"],
    activeYn: "Y",
  },
  {
    username: "user3",
    fullname: "Nguoi thu 3",
    role: "Developer",
    project: ["prj2", "prj3"],
    activeYn: "Y",
  },
];

app.get("/user", function (req, res) {
  const { username, fullname, role, project } = req.query;

  let result = users;
  if (username) {
    result = result.filter(
      (e) => e.username.toLowerCase() === username.toLowerCase()
    );
  }
  if (role) {
    result = result.filter((e) => e.role.toLowerCase() === role.toLowerCase());
  }
  if (project) {
    project1 = project.split(",");
    if (Array.isArray(project1)) {
      for (let key in project1) {
        result = result.filter((e) => e.project.includes(project1[key]));
      }
    } else {
      result = result.filter((e) => e.project.includes(project1));
    }
  }
  if (fullname) {
    result = result.filter(
      (e) => e.fullname.toLowerCase() === fullname.toLowerCase()
    );
  }
  res.send(result);
});

app.post("/user", function (req, res) {
  const user = req.body;
  const userExist = users.find((e) => user.username === e.username);
  if (userExist) {
    res.status(400).send("User already exist");
  } else {
    users.push(user);
    res.send("user added successfully");
  }
});

app.patch("/user", function (req, res) {
  const username = req.query.username;
  const user = req.body;
  const userExist = users.find((e) => e.username === username);
  if (!userExist) {
    res.status(400).send("User not found");
  } else {
    const index = users.indexOf(userExist);
    users[index] = user;
    res.send("User updated successfully");
  }
});

app.delete("/user", function (req, res) {
  const username = req.query.username;
  const userExist = users.find((e) => e.username === username);
  console.log(userExist);
  const index = users.indexOf(userExist);
  console.log(index);
  if (index === -1) {
    res.status(400).send("User not found");
    users.splice(1, 1);
  } else {
    users.splice(index, 1);
    res.send("User deleted successfully");
  }
});

app.listen(port, function () {
  console.log("Your app running on port " + port);
});
