# ecommerce-api
ecommerce api

Endpoints documentation. 

# POST - register user
localhost:5000/api/auth/register

BODY raw
{
    "username":"admin",
    "email":"admin@gmail.com",
    "password":"123456",
    "isAdmin":"true"

}

# POST - login user
localhost:5000/api/auth/login

{
    "username":"admin",
    "password":"123456"
}


# PUT - update user
localhost:5000/api/users/619b638ef56b82fcd6052840

Add the user id as a parameter and a valid JWT token in the header.

ex. 
HEADERS
token
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWI2MzhlZjU2YjgyZmNkNjA1Mjg0MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzc2NTI1MzMsImV4cCI6MTYzNzkxMTczM30.IErDlkDBDebXBkIzFmE2BTLGxLV4j4yoFad5qD-TnJ0


the user information to update.

BODY raw
{    
    "email":"aristicocruz@gmail.com"    
}


#GET - user by id
localhost:5000/api/users/find/619b638ef56b82fcd6052840

Add the user id and a valid JWT in the Header.

#GET - get all users
localhost:5000/api/users/

Add the user id and a valid JWT in the Header.


#GET - users stats
localhost:5000/api/products/


#PUT - update product
localhost:5000/api/products/619e04f6117b0f8a9070e52b


Add the product id and a valid JWT in the Header.

BODY raw
{
    "title":"shirt",
    "desc":"this is the first created product",
    "img":"shirt.png",
    "price": 15
}

#DEL - delete product
localhost:5000/api/products/619e0b9f375d5459610b383a


Add the product id and a valid JWT in the Header.

#GET - product
localhost:5000/api/products/find/619e0b9b375d5459610b3838

Add the product id and a valid JWT in the Header.


#GET - all products
localhost:5000/api/products?new=true

returns newest products

Add the product id and a valid JWT in the Header.
