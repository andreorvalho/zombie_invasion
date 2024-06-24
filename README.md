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

DEBUG=cypress:* yarn cypress run --spec "cypress/e2e/survivor/create_a_survivor.cy.js"


1. Change the way we render app to show a component that renders all other components

3. complete first feature(specs for everything)
5. Change the representation of location


Feature 1:
Register survivors: Provide a form to add new survivors to the database. The form should contain fields for the survivor’s name, age, gender, last location (latitude, longitude) and inventory.
