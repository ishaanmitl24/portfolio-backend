const ResponseError = ({ message, data }) => {
  return {
    ok: false,
    err: message || "Not Found",
    data,
  };
};

const ResponseSuccess = ({ message, data }) => {
  return {
    ok: true,
    message: message || "Success",
    data,
  };
};

module.exports = {
  ResponseError,
  ResponseSuccess,
};
