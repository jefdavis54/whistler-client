interface ReturnObj {
  errors: string[];
  data: any;
  token?: string;
}
const flattenGrapghql = (rawResponse: any, expectedObjName: string): ReturnObj => {
  if (
    rawResponse.data &&
    rawResponse.data[expectedObjName] &&
    rawResponse.data[expectedObjName].errors &&
    Array.isArray(rawResponse.data[expectedObjName].errors)
  ) {
    if (typeof rawResponse.data[expectedObjName].data === "object") {
      return rawResponse.data[expectedObjName];
    }
    if (rawResponse.data[expectedObjName].errors.length > 0) {
      return {
        errors: rawResponse.data[expectedObjName].errors,
        data: {},
      };
    }
  }
  // zJED TODO Update this for production.
  console.log("ERROR:flattenGrapghql", rawResponse);
  return {
    errors: ["ERROR: Invalid Graphql response received. Raw response in console."],
    data: {},
  };
};

export default flattenGrapghql;
