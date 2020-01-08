# template

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/template; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Test the replace feature

There are two basic templates:

1- `Hi {{name}}. This is the sample text for the {{notification_type}}`

2- `Hello {{name}} {{lastname}}. Have a good {{daytime}} {{name}}!`

Make a `POST` request to localhost:3030/replace. Body example:

```
{
	"template_id": 0,
	"content": {
		"name": "Alfonso",
		"notification_type": "order"
	}
}
```
OR:

```
{
	"template_id": 1,
	"content": {
		"name": "Alfonso",
		"lastname": "Roman",
		"daytime": "night"
	}
}
```

You should get a string as response with the content interpolated.

1- `"Hi Alfonso. This is the sample text for the order"`

2- `"Hello Alfonso Roman. Have a good night Alfonso!"`

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
