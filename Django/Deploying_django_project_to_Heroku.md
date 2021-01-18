<h1 align="center">Deploying Django Project to Heroku</h1>

1. See https://devcenter.heroku.com/articles/deploying-python
2. When deploying a django project to heroku; requirements.txt and .gitignore files should be inside src folder. .env should also be there, but since we can manually add SECRET_KEY to heroku there is no nooed to move the file into src. Also a good practice to duplicate .gitignore file into src folder if you have already initialized your project to GitHub.
3. Install the following packages<br>
For Mac
```
$ python3 -m pip install gunicorn
$ python3 -m pip install django-heroku
```
For Windows
```
$ py -m pip install gunicorn
$ py -m pip install django-heroku
```

4. Go to settings.py and do the following
   * `import django_heroku`
   * add `django_heroku.settings(locals())` to the bottom of the page
5. Make sure the directory is src and `pip freeze requirements.txt`
6. Create a file named `Procfile` under src folder. Write the codes inside. Make sure to write project name folder correctly. (It is the folder where settings.py is located)
```
release: python manage.py makemigrations --no-input
release: python manage.py migrate --no-input

web: gunicorn prj_folder_name.wsgi
```
7. Open heroku.com. Sign up if you have not already. New > Create new app. Write the name of the app and select a proper region. (Assume the name of the app as heroku-project-name)
8. Open the app. Go to Settings > Config Vars > Reveal Config Vars. Write SECRET_KEY as key and your secret key which you should have already written in .env file to value fields and Add.
9. Go to Deploy. Here we will use Heroku Git because it is much easier for those who has initiated the project to GitHub before.  [Download and install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) if you have not done before.<br>
10. Go to your CLI and and follow the code snippets below. Again make sure that the directory is src.
```
$ git init
$ heroku login
$ heroku git:remote -a heroku-project-name

$ git add .
$ git commit -am "to deploy"
$ git push heroku master
```
11. Congratulations your project is deployed to heroku. Now you can reach your project from the url https://heroku-project-name.herokuapp.com
12. One more thing: Your data in SQLite3 database and user information does not exist any more. You should create data once again. It's good to start with creating a super user and make some customization at admin panel.
13. Go to your CLI.
```
$ heroku run bash
$ python manage.py createsueruser
```
14. Login to https://heroku-project-name.herokuapp.com/admin and manipulate data in admin panel.
15. Good tip is to try your paths, authorization and permissions by using POSTMAN.