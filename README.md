# J-query-son
Example to How to use a jQuery + Ajax + PHP + JSON

This is a simple example that you can get a message "Hello" concat with your name filled in a TextBox.

First you need to add the references to jquery.js and a script that contain the functions to work with the data (script.js) in your index.php

```javascript
script src="js/jquery.js"
```

Then you must to set the id of the items in the index.php, like inputs, buttons, div, ect.

```html
<input type="text" id="name">
```

After set the code in script.js, you should get the value of input

```javascript
var name=$("#name").val();
```

Using ajax to make call to data_process.php always with POST

```javascript
$.ajax({
	type:"post",
	url:"data_process.php",
```

The value of the input to send

```javascript
data:"name="+name,
```

The data type to JSON because our message will be encoded in JSON

```javascript
dataType:"JSON",
```

On succes function you set in the div with id "message" the data encoded in JSON. Don´t forget to acces to key in the encoded array and you get 
something like this:

```php
encoded array {"Name": "Hello Name of Input"}
```

Your key is "Name" and you can get the value like this

```javascript
$("#message").html(result.Name);
```

Try to add some items to your array. (Y)