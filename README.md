Test

POST:
URL: http://localhost:8080/user__
body:__
{__
"username": "adduser",__
"fullname": "nguoi duoc add",__
"role": "Developer",__
"project": ["prj3", "prj1"],__
"activeYn": "Y"__
}__

GET:
URL: http://localhost:8080/user?project=prj1
http://localhost:8080/user?role=developer
http://localhost:8080/user?role=Admin
http://localhost:8080/user?project=prj1%2Cprj3
http://localhost:8080/user?project=prj3&role=developer

PATCH:
URL: http://localhost:8080/user?username=adduser
body:
{
"username": "adduser",
"fullname": "Nguoi duoc sua",
"role": "Admin",
"project": ["prj1"],
"activeYn": "Y"
}

DELETE:
URL: http://localhost:8080/user?username=user1
