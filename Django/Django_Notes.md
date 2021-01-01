<h1 align="center">Django Notes</h1>  


## Table of Contents

- [Basics](#✅Basics)
- [Settings](#✅Settings)


## ✅Basics

- Commands for starting up. (Best use terminal within VS Code)
- ❗️ These codes are valid for Mac.
- For creating environment  `python3 -m venv environment_name`
- For activating environment  `source environment_name/bin/activate`
- For installing django  `pip3 install django`
- To see if django is installed `pip freeze`
- For creating requirement.txt file which helps other users see the installed packages `pip freeze > requirement.txt`
- Starting a project `django-admin startproject project_name`
- ❗️ Best practice rename the project_name folder as "src"
- For migrating the packages 
  * `cd src`
  * `python3 manage.py migrate`
- For running server `python3 manage.py runserver` ❗️ By default server listens to port number 8000
## ✅Settings
<br/>
- 
