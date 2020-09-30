# ActiveRecord
Active Record is a widely used and loved Ruby Gem!

Active Record is an ORM (Object Relational Mapper). It takes over some of the functionality we have been building into our Ruby classes and connects them to our Sqlite3 database!

**Parts of the OO class pattern we have been practicing gets thrown out the window**

> Why abstract this functionality into a gem?

## What does ActiveRecord do for us?

### Before
```ruby
class Student
    attr_accessor :name, :cohort

    @@all = []

    def initialize(name, cohort)
        @name = name
        @cohort = cohort

        @all << self
    end
end
```

### After
```ruby
class Student < ActiveRecord::Base

end
```
> What takes over the responsibility of `@@all`?

## Database
A few pieces come together to setup and create a database for our app.
- `ActiveRecord` provides the language for communicating with a database by writing Ruby code
- Rake - gives us some helpful "tasks" or executable commands that do the work of creating and migrating the database

### environment.rb
This file is where `ActiveRecord` establishes a connection to the database. We define the type of database (`sqlite3`), and the database name and location.

### Rakefile
Rake is a tool designed for running scripts. By requiring `sinatra/activerecord/rake` we are giving this file access to many useful "rake tasks" imported from ActiveRecord.

The `:console` task is an example of how we can write custom rake tasks! The custom `:console` task starts a pry session.

### Gemfile
The `Gemfile` is how Bundler manages our apps dependencies. In this demo we are including:
- `sinatra-activerecord`
- `pry`
- `sqlite3`
- `rake`

### Create a database
In the terminal we can run `rake db:create`.

We use the `rake` gem to execute the `db:create` provided by `sinatra/activerecord`. This creates a database with the name and location defined in `environment.rb`


## Migrations
```ruby
class Student
    # attr_accessor :name, :cohort

    # @@all = []

    # def initialize(name, cohort)
    #     @name = name
    #     @cohort = cohort

    #     @all << self
    # end
end
```
> How does ActiveRecord know what attributes should be available on each class?

Migrations are a convenient way to consistently alter our database with Ruby. With migrations we're talking about the shape of the database, not content.

### New Migration

`rake db:create_migration create_students`

It's always advised to use the `rake db:create_migration` when creating migrations. Each time a migration is created this way, the filename is generated with a time stamp. This timestamp ensures that migrations are applied to the database in the order they are created and that only the most recent *new* migrations are run each successive time we run `rake db:migrate`.

```ruby
class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name
      t.string :cohort
    end
  end
end
```

With this migration we are creating a new table `students` with columns `name` and `cohort`.
- **table names are always plural and lowercase**
- column names defined in migrations correspond to attributes available on our model classes

Anytime you create a migration you must run `rake db:migrate` to run the migration against the database and apply your changes.

### schema.rb

Each time you migrate a `scheme.rb` file is created or updated to reflect the changes. This file serves as a record for the database's structure and defines what tables are accessible and all of the columns (attributes) on each table.

Now we can test that our `Student` model and database are properly connected with ActiveRecord

`rake console` to start a pry session
```ruby
Student.attribute_names # => ["id", "name", "cohort"]
# Note that the id attribute was created automatically
Student.create(name: "max", cohort: "chi-091420") 
# => #<Student:0x00007f8d5a7ef628 id: 1, name: "max", cohort: "chi-091420">
```

ActiveRecord gives us a few ways to initialize instances of our class.
- `Student#new` creates an instance in memory that will not be persisted
- `Student#save` will then store that instance in the database
- `Student#create` combines these steps initializing and saving the instance in one method

Note that we pass a hash of keyword arguments instead of a comma separated list of arguments like before.

> Why might we want to initialize this way?

## Active Record associations

Active record includes a number of methods that specify the ways our models relate with one another
- belongs_to
- has_many
- has_many through

We could imagine a one to many relationship between Student and Cohort. In our model definitions we describe their relationship as follows:

```ruby
class Student < ActiveRecord::Base
    belongs_to :cohort
end

class Cohort < ActiveRecord::Base
    has_many :students
end
```

ActiveRecord will also expect a `cohort_id` column to exist on the `students` table.