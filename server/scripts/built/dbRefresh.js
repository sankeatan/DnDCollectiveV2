"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var fs_1 = require("fs");
// check the environment variable is set
var mongodb_uri = process.env.MONGODB_URI;
if (mongodb_uri === undefined) {
    var localhost_uri_example = "mongodb://localhost/DnDCollectiveV2";
    console.error("MONGODB_URI must be defined before running the script:" +
        "\nOn Apple or Linux:" +
        "\n  $MONGODB_URI=".concat(localhost_uri_example, " npm run db:refresh\n") +
        "\nOn Windows:" +
        "\n   PowerShell:" +
        "\n       $env:MONGODB_URI=\"".concat(localhost_uri_example, "\"; npm run db:refresh") +
        "\n   CMD prompt:" +
        "\n       set MONGODB_URI=".concat(localhost_uri_example, " && npm run db:refresh\n"));
    process.exit(1);
}
// check mongoimport can be found and executed
try {
    (0, child_process_1.execSync)("mongoimport --version");
}
catch (e) {
    console.error("could not execute mongoimport - make sure the directory containing mongoimport is visible in your $PATH environment variable");
    process.exit(1);
}
var json_db_dir = "src";
var json_db_collection_prefix = "5e-SRD-";
var json_data_pattern = "\\b".concat(json_db_collection_prefix, "(.+)\\.json\\b");
var regex = new RegExp(json_data_pattern);
var files = [];
try {
    files = (0, fs_1.readdirSync)(json_db_dir);
}
catch (e) {
    console.error(e);
    process.exit(1);
}
if (files.length === 0) {
    console.error("no JSON data found in ".concat(json_db_dir, "/"));
    process.exit(1);
}
var collections = [];
files
    .filter(function (filename) { return regex.test(filename); })
    .forEach(function (filename) {
    var filepath = "".concat(json_db_dir, "/").concat(filename);
    var match = regex.exec(filename);
    var data_name = match[1];
    var collection_name = data_name.toLowerCase();
    collections.push({ index: collection_name });
    // example:
    // mongoimport --uri mongodb://localhost/5e-database
    //             --collection ability-scores
    //             --file src/5e-SRD-Ability-Scores.json
    //             --jsonArray
    //             --drop
    console.log("importing ".concat(data_name, "..."));
    var exec_string = "mongoimport --uri ".concat(mongodb_uri) +
        " --collection ".concat(collection_name) +
        " --file ".concat(filepath) +
        " --jsonArray" +
        " --drop";
    (0, child_process_1.execSync)(exec_string);
});
// Make collections table
console.log("creating index table...");
var filepath = "src/collections.json";
(0, fs_1.writeFileSync)(filepath, JSON.stringify(collections, null, 2), "utf8");
var exec_string = "mongoimport --uri ".concat(mongodb_uri) +
    " --collection collections" +
    " --file ".concat(filepath) +
    " --jsonArray" +
    " --drop";
console.log(collections);
(0, child_process_1.execSync)(exec_string);
(0, fs_1.unlinkSync)(filepath);
