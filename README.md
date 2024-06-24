# IMPLEMENTED FEATURES:

1. Feature 1:
Register survivors: Provide a form to add new survivors to the database. 
The form should contain fields for the survivor’s name, age, gender, last location (latitude, longitude) and inventory.


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

# API DOCUMENTATION

## Resources:

1. Survivors
1.1. POST '/survivors'

   Registers a survivor on the APP. creates a record on the database. It requires at least name, age, gender, latitude and longitute.

   Request body:
   ```
   {
     name: 'name',
     age: '12',
     gender: 'gender',
     latitude: 'latitude',
     longitute: 'longitute',
     water: 1,
     food: 1,
     medication: 1,
     ammunition: 1
   }
   ```
   Responses:

   200: Successfully registered the survivor, responds with the newly creted survivor data:
   ```
   {
     name: 'name',
     age: '12',
     gender: 'gender',
     latitude: 'latitude',
     longitute: 'longitute',
     water: 1,
     food: 1,
     medication: 1,
     ammunition: 1
   }
   ```

   400: Fails to register the survivor and returns all the errors:
   ```
   {
    "age": [
        "A valid integer is required."
    ],
    "gender": [
        "This field may not be blank."
    ],
    "latitute": [
        "This field may not be blank."
    ],
    "longitude": [
        "This field may not be blank."
    ]
   }
   ```

IMPROVEMENTS

1. Change the representation of location to a point with 2 integer values
2. Make sure all inventory is not possible to be under 0
3. Age should also be an integer
4. 
