# Rails API

---
## LGs:
- [ ] Return RESTful responses from a Rails backend
    * Render JSON data from an endpoint
- [ ] Use serializer to send response back

---
#### Return RESTful responses from a Rails backend
* Render JSON data from end point
    * `rails g controller Api::V1::instructor --skip-test-framework`
    * render JSON and use include
* make a fetch request from front-end

#### Use serializer to send response back
* `gem 'active_model_serializers'`
* `rails g serializer instructor`
* `ActiveModel::Serializer` provides a way of creating custom JSON by representing each resource as a class that inherits from `ActiveModel::Serializer`. With that in mind, it gives us a better way of testing compared to other methods. It can also be tested in isolation regardless of how the data retrieval is done in the controller.

#### CORS 
* `gem rack-cors`
* ```rails
      config.middleware.insert_before 0, Rack::Cors do
          allow do
              origins '*'
              resource '*', headers: :any, methods: :any
          end
      end ```
