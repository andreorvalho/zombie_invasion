INSTALL:

cd backend
python manage.py migrate backend
python manage.py migrate zombie_invasion


USAGE:
#start server
python manage.py createsuperuser
