const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

//Create Round
const round_id = uuidv4();
var params = {
  TableName: "crusher",
  Item: {
    PK: "RND#" + round_id,
    SK: "MD#" + round_id,
    name: "test-1",
    status: "B",
    user_id: "",
    started: "",
    round_id: round_id,
  },
};

//Create Plan
// const plan_id = uuidv4();
// var params = {
//   TableName: "round-24",
//   Item: {
//     PK: "RND#" + "9908ef91-fb17-4833-bc08-932c0fd387d6",
//     SK: "PLN#" + plan_id,
//     name: "A",
//     plan_id: plan_id,
//   },
// };

//Create Move
// const move_id = uuidv4();
// var params = {
//   TableName: "round-24",
//   Item: {
//     PK: "PLN#" + "7d526dd7-caf7-4297-9246-ab1cf8ba9711",
//     SK: "MOV#" + move_id,
//     name: "Squat",
//     move_id: move_id,
//   },
// };

// dynamodb.put(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

//Find Round
// var params = {
//   TableName: "round-24",
//   Key: {
//     PK: "RND#9908ef91-fb17-4833-bc08-932c0fd387d6",
//     SK: "MD#9908ef91-fb17-4833-bc08-932c0fd387d6",
//   },
// };

// dynamodb.get(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// Find All Plans

// var params = {
//   TableName: "round-24",
//   KeyConditionExpression: "#PK = :PK and begins_with(#SK,:SK)",
//   ExpressionAttributeNames: { "#PK": "PK", "#SK": "SK" },
//   ExpressionAttributeValues: {
//     ":PK": "RND#9908ef91-fb17-4833-bc08-932c0fd387d6",
//     ":SK": "PLN#",
//   },
// };

// dynamodb.query(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });
