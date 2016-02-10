#TASKS

#### javaScript environment
the browser ;
the console

#### what we’re ulimately gonna do…kind of

use `script` tags to dynamically modify html.

```
  <h1>Travis is a happy camper: </h1>
  <h3 class="status"> 
    <!-- js here! -->
  </h3>
  <script>
    nameElement = document.querySelector('.status')

    var happyCamper = true
    
    if (happyCamper === true){
        document.querySelector('.status').innerHTML = "so sad"
    } else {

    }

  </script>
```

#### primitive dataTypes
strings
numbers
true/false
null

#### variables---for storing data types

#### functions--- for creating reusable commands and accepting values to give to the command

#### Quick REVIEW:javascript key words
var
function — return

####comparators `(===, >,<, >=, <=)` 
evaluate to true false

#### comparators are useful for -- if-else
if true, do this
  else do this

####putting if-else in functions


#### changing scope w/in functions

