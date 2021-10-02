'use strict';
const queryString = require('querystring')
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${event.pathParameters.name}`,
        input: event.name,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.showUser = async (event) => {
  const body = queryString.parse(event['body'])
  console.log(body)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `peticion post`,
        input: `Hola ${body.name}`,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

