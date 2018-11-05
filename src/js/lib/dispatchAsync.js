export function dispatchAsync(dispatch, getState, data) {
  const { apiRequest, options, model, action, formOpts, meta } = data;

  // const token = getState().chat.token;
  const requestOptions = {
    // token,
    ...options
  };

  const modelForSend = formOpts && formOpts.onReqTranform
    ? formOpts.onReqTranform(model)
    : model;

  dispatch({
    type: action,
    data: modelForSend,
    meta: {
      ...meta,
      isFormAction: formOpts
    }
  });

  return apiRequest(model, requestOptions).then((response) => {
    const dataForSave = formOpts && formOpts.onRespTranform
        ? formOpts.onRespTranform(response.data)
        : response.data;

    dispatch({
      type: `${action}_SUCCESS`,
      data: dataForSave,
      requestModel: model,
      meta: {
        ...meta,
        isFormAction: formOpts
      }
    });

    return Promise.resolve(response);
  }, (response) => {
    const dataErrors = formOpts && formOpts.onRespErrorTranform
        ? formOpts.onRespErrorTranform(response.errors)
        : response.errors;

    dispatch({
      type: `${action}_FAIL`,
      errors: dataErrors,
      requestModel: model,
      meta: {
        ...meta,
        isFormAction: formOpts
      }
    });

    return Promise.reject(response);
  });
}
