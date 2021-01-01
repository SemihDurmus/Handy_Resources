<h1 align="center">Django Notes</h1>  


## Table of Contents

- [✅Basics](#Basics)
- [✅Settings](#Settings)
- [✅Creating Model](#Creating-Model)

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
- Create a file named urls.py under src/app_name and add the following code to that file
```
from django.urls import path
from .views import home_view, about

urlpatterns = [
    path("home/", home_view),
    path("about/", about)
]
```
- Do following changes for src/project_name/urls.py
```
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home', include("app_name.urls"))
]
```
## ✅Creating_Model
- Write the following example model to app_name/models.py
```
from django.db import models

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
```
- We need to introduce our model.
- `python3 manage.py makemigrations` + `python3 manage.py migrate`
- With these commands we created 0001_initial.py file under src/app_name/migrations with information regarding our model. 
- id paraeter is automatically created.
- Now we created a database, but we need to create a superuser to manage the db --> `python3 manage.py createsuperuser`
- Write the following code lines to admin.py file under src/app_name
```
from django.contrib import admin
from .models import Student

admin.site.register(Student)
```
- We can manipulate data on `http://localhost:8000/admin/app_name/student/`
- The items in the db appear as objects. But we want them to appear as names, numbers etc. We turn back to models.py file and add the following function under Student class. So that we see the first names of the items on the admin panel.
```
def __str__(self):
    return self.first_name
```
- Another way to manipulate data in db is by shell `python3 manage.py shell` 
- Using the shell command line we can use the following example code lines to manipulate data
```
from app_name.models import Student
s1 = Student(first_name = "Mick", last_name = "M", number = 3)
s1
s1.save() 
exit()
```
- `.save()` saves the item to database.
- Another option to save an item to db is `s1 = Student.objects.create(first_name = "Mick", last_name = "M", number = 3)`
- For fetching data from the database we use get, filter, exclude. get is for unique data. If we call more than one item with get, we receive an error.
```
s2 = Student.objects.get(id = 002)
s3 = Student.objects.filter(first_name = "Ricky")
```
- filter returns a query set. we can call any item from the returned data i.e. `s3[0].first_name`
- exclude calls the items which have not equal values. `s4 = Student.objects.filter(first_name = "Mick")`
- `s5 = Student.objects.all()` fetches all the objects
- `s6 = Student.objects.filter(last_name__startswith="M")`
- `s7 = Student.objects.filter(last_name__contains="Ma")`
- For more of these kind of operations see `field lookup` in django.
