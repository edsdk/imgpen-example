# ImgPen example

> How to use ImgPen image editor code samples

Here is the couple of [ImgPen](https://imgpen.com) usage examples in TypeScript/JavaScript code with comments.

Server side is also bundled in this repo to allow you upload edited images and update them on client. Backend is provided by [File Uploader microservice](https://npmjs.com/package/@edsdk/file-uploader-microservice) based on [Express](https://www.npmjs.com/package/express).

Project can be built with Webpack and ran instantly after you download it, no other webserver (like Nginx or Apache) is required.


## Install, build, run

1. Clone this repository:

```text
git clone https://github.com/edsdk/imgpen-example
cd imgpen-example
```

2. Build and run it

```text
npm i
npm run start
```

Then open [localhost:8080](http://localhost:8080) URL in your browser and enjoy the demo.


## Explanation

There are two simple examples inside this demo, you can check there TypeScript source in `src/imgpen-example.ts`. If you use EcmaScript (JavaScript) the code will be very similar for you.

Examples let you to edit images and upload them into `www/images` directory.

In your project you will use the same [File Uploader](https://npmjs.com/package/@edsdk/file-uploader-server) backend (other supported languages: PHP, Java, etc), probably as microservice.


## See Also

- [ImgPen website](https://imgpen.com)
- [File Uploader server for Express](https://npmjs.com/package/@edsdk/file-uploader-server)
- [ImgPen package](https://npmjs.com/package/@edsdk/imgpen)

## License

BSD