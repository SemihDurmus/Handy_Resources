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
- ❗️ Best practice rename the project_name folder as "src" `mv project_name/ src`
- For migrating the packages 
  * `cd src`
  * `python3 manage.py migrate`
- For running server `python3 manage.py runserver` ❗️ By default server listens to port number 8000

## ✅Settings
- Recommended extensions for Django
  * SQLite
  * PyLance
  * PyLint
- For creating a new app in django `python3 manage.py startapp app_name`
- Add the following to src/app_name/views.py file
```
from django.http import HttpResponse

def home_view(request):
    return HttpResponse("HOME PAGE")

def about(request):
    return HttpResponse("ABOUT PAGE")
```
- Add the following to src/project_name/settings.py under INSTALLED_APPS 
  * `'app_name.apps.App_nameConfig()',` or simply `'app_name',` 
- 
