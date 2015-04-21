## React Data Tables, RDT

The main objective is to provide a simple, intuitive, and powerful data tables module.
RDT is alternative to jQuery's dataTables module.

##### The project is still young and unstable, so, I don't recommend to be pushed in production!
###### Contributions are welcomed!

## Code Example

As I said, my main objective is to build extremely readable API! 

The following snippet will create a table based on the JSON response from source.php
```
React.render(<Table remoteLocation="/source.php" remoteMethod="GET" />,
              document.getElementById('table'));
```
An example of how [source.php](https://github.com/Radostin/react-data-tables/blob/master/source.php) might look like.

However, we know that in larger applications the table will not be consisted only of data, but they might
have buttons, links, events, and etc. Hence, defining custom cells is important.

In the current version, we are able to do things like:

```
var customCells = {
    actions: function (user) {
        return ( 
          <div>
            <a className="btn btn-primary"
            onClick={this.deactivateUser(user.id)}>Deactivate</a>
          <divr> 
        );
    },
    avatar: function (user) {
        return ( <img src={'/img/avatars'+user.avatar} />)
    }
};

React.render(<Table
        remoteLocation="/users"
        remoteMethod="GET"
        customCells={customCells}
    />,

    document.getElementById('table'));
```

## Installation

As of now, you can easily clone the package on your machine and run:

1-Step) 
#### Install Node.JS dependencies
```
cd project-folder/
npm install
```

2-Step) 
#### Boot php server to generate json data from source.php
```
php -S localhost:8888
```

3-Step)
#### Open up localhost:8888 in your browser

## TODOS:
There project is still a baby and there's a lot to be done.
My primary concerns will be:

* Searching in RDT
* Searching and quering external resource
* In-memory sorting and external resource sorting
* Providing a test suite

## License

The MIT License

Copyright (c) 2015 Rad Bonev <radbonev@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
