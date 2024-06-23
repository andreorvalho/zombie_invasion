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
2. Add tests for backend, frontend and cypress
3. complete first feature
4. add error handling for example no more than chars that is allowed
5. Change the representation of location
6. js tests
