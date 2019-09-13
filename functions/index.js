const functions = require("firebase-functions");
const { Storage } = require("@google-cloud/storage");
const projectId = "cloud-funcitons-demo-practice";
let gcs = new Storage({
  projectId
});
// get os of file
const os = require("os");
// construct a path
const path = require("path");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// .object() listens to the default bucket the firebase project ships with

exports.onFileChange = functions.storage.object().onFinalize(event => {
  const { bucket } = event;
  const { contentType } = event;
  const { kind } = event;
  const { name } = event;
  console.log("File change detected");
  if (path.basename(name).startsWith("renamed-")) {
    console.log("File already renamed");
    return;
  }

  // create new bucket to put the file
  const destinationBucket = gcs.bucket(bucket);
  // download the uploaded file
  // tempFilePath is where to temporarily download it

  // os.tmpdir() - temporary path of the os the function runs in
  //
  const tempFilePath = path.join(os.tmpdir(), path.basename(name));
  const metaData = { contentType };
  return destinationBucket
    .file(name)
    .download({
      destination: tempFilePath
    })
    .then(() => {
      return destinationBucket.upload(tempFilePath, {
        destination: "renamed-" + path.basename(name),
        metadata: metaData
      });
    });
  return;
});
