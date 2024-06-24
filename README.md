# Instalation Guide:
1. cd backend
2. python manage.py migrate backend
3. python manage.py migrate zombie_invasion
4. cd ../frontend
5. yarn install

# USAGE:

## Start server on the backend
1. cd backend
2. python manage.py runserver

## Start server on the frontend
1. cd frontend
2. yarn start

## test 
python manage.py createsuperuser
visit: http://localhost:8000/admin and check if you can log in

# Run tests
1. cd backend
2. python manage.py test

1. cd frontend
2. yarn cypress run --spec "**/*.cy.js"



Feature 1:
Register survivors: Provide a form to add new survivors to the database. The form should contain fields for the survivor’s name, age, gender, last location (latitude, longitude) and inventory.

IMPROVEMENTS

5. Change the representation of location
