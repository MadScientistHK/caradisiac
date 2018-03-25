# CARADISIAC

## Installation of the required packages

### Node-car-api, Nodemon, Express, Elasticsearch and Body-parser
```sh
❯ cd path/to/workspace/caradisiac
❯ npm install https://github.com/92bondstreet/node-car-api.git
❯ npm install --save express elasticsearch body-parser
❯ npm install --save-dev nodemon
```
## Preparation to the use

To use the API, you first have to run the server:
```sh
❯ cd path/to/workspace/caradisiac
❯ npm run dev
```
Then, you have to run Elasticsearch locally
Finally, you can use Postman to make the requests:
`POST` `localhost:9292/populate` to index records to Elasticsearch
  or
`POST` `localhost:9292/suv` to fetch the right data

Enjoy !

