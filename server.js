/*

 Demo server with EdSDK File Uploader integrated.
 Will serve incoming files from EdSDK image editor.

 Run with command:
   node server.js
 and open the URL in browser:
   http://localhost:8080/

*/

require("@edsdk/file-uploader-microservice").startFileUploaderMicroservice({
    host: 'localhost',
    port: 8080,
    urlUploader: '/uploader',
    dirRoot: './www',
    dirFiles: './www/images'
});
