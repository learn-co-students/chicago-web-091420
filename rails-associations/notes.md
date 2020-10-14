# Rails Associations & Forms

## Objectives

- review basic associations in Rails
- demonstrate `link_to` method using Rails "path helpers"
- associate objects using a select input

## Questions

- regex
- `#build`

## Notes

path_helpers:

- post_path(<post_instance>) -> "/posts/:id" -> `PostsController#show`
- posts_path -> "/posts" -> `PostsController#index`

`#collection_select(1,2,3,4)`:

1. the parameter key, the name of the attribute to be assigned to
2. the collection to create a dropdown from
3. the value that will be sent with the parameter key
4. the text to display in the dropdown list

## Icebox

- difference betweeen `new` and `build`
- new_song = artist.songs.build({})