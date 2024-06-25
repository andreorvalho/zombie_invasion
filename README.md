# IMPLEMENTED FEATURES:

1. Feature 1:
Register survivors: Provide a form to add new survivors to the database.
The form should contain fields for the survivor’s name, age, gender, last location (latitude, longitude) and inventory.


# Instalation Guide:
1. cd backend
2. python manage.py migrate zombie_invasion
3. cd ../frontend
4. yarn install

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

visit localhost:3000 and try to use the app

# Run tests
1. cd backend
2. python manage.py test

1. cd frontend
2. yarn start
3. yarn cypress run --spec "**/*.cy.js"

# API DOCUMENTATION

## Resources:

1. Survivors
1.1. POST '/survivors'

   Registers a survivor on the APP. creates a record on the database. It requires at least name, age, gender, latitude and Longitude.

   Request body:
   ```
   {
      name: 'name',
      age: '12',
      gender: 'gender',
      latitude: 'latitude',
      longitude: 'longitude',
      water: 1,
      food: 1,
      medication: 1,
      ammunition: 1
   }
   ```
   Responses:

   200: Successfully registered the survivor, responds with the newly created survivor data:
   ```
   {
      name: 'name',
      age: '12',
      gender: 'gender',
      latitude: 'latitude',
      longitude: 'longitude',
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
    "latitude": [
      "This field may not be blank."
    ],
    "longitude": [
      "This field may not be blank."
    ]
   }
   ```

   500: When the system is down

1.2. PUT '/survivors/id'

  Updates a survivor.

   Request body:
   ```
   {
      name: 'name',
      age: '12',
      gender: 'gender',
      latitude: 'latitude',
      longitude: 'longitude',
      water: 1,
      food: 1,
      medication: 1,
      ammunition: 1
   }
   ```
   Responses:

   200: Successfully updated the survivor, responds with the survivor data:
   ```
   {
      name: 'name',
      age: '12',
      gender: 'gender',
      latitude: 'latitude',
      longitude: 'longitude',
      water: 1,
      food: 1,
      medication: 1,
      ammunition: 1
   }
   ```

   400: Fails to update the survivor and returns all the errors:
   ```
   {
    "age": [
      "A valid integer is required."
    ],
    "gender": [
      "This field may not be blank."
    ],
    "latitude": [
      "This field may not be blank."
    ],
    "longitude": [
      "This field may not be blank."
    ]
   }
   ```

   500: When the system is down

1.3. GET '/survivors'

Returns all the survivors registered on the APP.

  Responses:

   200: Successfully registered the survivor, responds with the newly created survivor data:
   ```
   {
      name: 'name',
      age: '12',
      gender: 'gender',
      latitude: 'latitude',
      longitude: 'longitude',
      water: 1,
      food: 1,
      medication: 1,
      ammunition: 1
   }
   ```

   500: When the system is down


2. Infection Reports

2.1. POST '/infection_reports'

   Registers a survivor as infected. That needs an id for the survivor who reports and an id for the survivor who is being reported

   Request body:
   ```
   {
      reported: '1',
      reporter: '2',
   }
   ```
   Responses:

   200: Successfully registered the infection report, responds with the the report data:
   ```
   {
      id
      reported: '1',
      reporter: '2',
   }
   ```

   400: Fails to register the infection and returns all the errors:
   ```
   {
    "reporter": [
      "This field is required."
    ]
   }
   ```

   500: When the system is down
