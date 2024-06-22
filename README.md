INSTALL:

cd backend
python manage.py migrate backend
python manage.py migrate zombie_invasion

USAGE:
#start server
python manage.py createsuperuser

visit: http://localhost:8000/admin and check if you can log in

RUN TESTS:

python manage.py test
