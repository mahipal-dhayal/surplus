




const getHeaders = () => {
  const headers = {
    "Device-Type": 'android',
    "Accept": "application/json",
    "Version-Code": "1",
    "Content-Type": "application/json", // Ensures raw JSON is sent
  };

  console.log("headers>>>>>>>>>", headers);
  return headers;
};

const getAuthHeaders = () => {
  const headers = {
    "Device-Type": 'android',
    "Accept": "application/json",
    "Version-Code": "1",
    "Content-Type": "application/json", // Ensures raw JSON is sent
  };

  if (isStringValid(SharedManager.getInstance().getAuthToken())) {
    headers.Authorization =
      "Bearer " + SharedManager.getInstance().getAuthToken();
  }

  console.log("headers>>>>>>>>>", headers);

  return headers;
};

const getImageHeader = () => {
  const headers = {
    "Device-Type": Platform.OS,
    "Accept": "application/json",
    "Version-Code": "1",
    "Content-Type": "multipart/form-data", // Ensures raw JSON is sent
  };

  if (isStringValid(SharedManager.getInstance().getAuthToken())) {
    headers.Authorization =
      "Bearer " + SharedManager.getInstance().getAuthToken();
  }

  console.log("headers>>>>>>>>>", headers);
  return headers;
};

const showLog = (
  url: any,
  Status: any,
  method: any,
  header: any,
  body: any,
  res: any
) => {
  console.log("\n--------- NETWORK CALL STARTED ---------\n\n");
  console.log("[Fetch] Url-->", url);
  console.log("[Fetch] Status-->", Status);
  console.log("[Fetch] Header-->", header);
  console.log("[Fetch] Method-->", method);
  console.log("[Fetch] Body-->", body);
  console.log("[Fetch] Response-->", res);
  console.log("\n--------- NETWORK CALL ENDED ---------\n\n");
};

const authError = () => {
  console.log("Come from 401");

  AsyncStorage.removeItem(STORAGE.USER_DETAILS).then(() => {
    store.dispatch(setUserLoggedInFlag(false));
  });
  showErrorMessage(
    "Session Expired",
    "your session has been expired please login again"
  );
  return {
    status: false,
    message: "Your session has been expired please login again",
  };
};

export const CallGetAPI = async ({
  header = getAuthHeaders(),
  url,
}) => {
  try {
    const response = await fetch(url, { headers: header });
    const result = await response.json();
    showLog(url, response.status, header, "GET", {}, result);
    if (result.code == 401 && 404 && 500) return authError();

    // Handle 500 Internal Server Error
    if (result.code === 500) {
      showErrorMessage("Internal Server Error. Please try again later.");
      return { status: false, message: "Internal Server Error" };
    }

    // Handle 422 Validation Errors
    if (result.code === 422 && result.errors) {
      const firstErrorMessage = extractFirstValidationError(result.errors);
      showErrorMessage(firstErrorMessage);
      return { status: false, message: firstErrorMessage };
    }


    return result;
  } catch (e) {
    if (e.message == "Aborted") return abortError();
  }
};

export const callPostAPI = async ({
  isAuth,
  body,
  url,
  method = "POST",
}) => {
  try {
    console.log("isAuth[][][][][]", isAuth);
    console.log("body[][][][][]", body);
    console.log("url[][][][][]", url);
    console.log("method[][][][][]", method);

    const response = await fetch(url, {
      method,
      headers: isAuth ? getAuthHeaders() : getHeaders(),
      body: body,
    });

    const result = await response.json();

    showLog(
      url,
      result.status,
      method,
      isAuth ? getAuthHeaders() : getHeaders(),
      body,
      result
    );
    if (result.code == 401 && 404) return authError();

    // Handle 500 Internal Server Error
    if (result.code === 500) {
      showErrorMessage("Internal Server Error. Please try again later.");
      return { status: false, message: "Internal Server Error" };
    }

    // 🔐 Handle 403 - Stripe onboarding required
    if (result.code === 403 && result.message) {
      //console.log("][][][][][][][][][][]", result?.message);\
      showErrorMessage(result.message); // <-- Show the specific error
      return { status: false, message: result.message };
    }

    // Handle 422 Validation Errors
    if (result.code === 422 && result.errors) {
      const firstErrorMessage = extractFirstValidationError(result.errors);
      showErrorMessage(firstErrorMessage);
      return { status: false, message: firstErrorMessage };
    }

    return result;
  } catch (e) {
    console.log("e[][][][][", e);
    if (e.message == "Aborted") return abortError();
  }
};

export const callDeleteAPI = async ({
  isAuth,
  body,
  url,
  method = "DELETE",
}) => {
  try {
    console.log("isAuth[][][][][]", isAuth);
    console.log("body[][][][][]", body);
    console.log("url[][][][][]", url);
    console.log("method[][][][][]", method);
    const response = await fetch(url, {
      method,
      headers: isAuth ? getAuthHeaders() : getHeaders(),
      body: body,
    });

    const result = await response.json();

    showLog(
      url,
      result.status,
      method,
      isAuth ? getAuthHeaders() : getHeaders(),
      body,
      result
    );
    if (result.code == 401 && 404) return authError();

    // Handle 500 Internal Server Error
    if (result.code === 500) {
      showErrorMessage("Internal Server Error. Please try again later.");
      return { status: false, message: "Internal Server Error" };
    }

    // Handle 422 Validation Errors
    if (result.code === 422 && result.errors) {
      const firstErrorMessage = extractFirstValidationError(result.errors);
      showErrorMessage(firstErrorMessage);
      return { status: false, message: firstErrorMessage };
    }

    return result;
  } catch (e) {
    console.log("e[][][][][", e);
    if (e.message == "Aborted") return abortError();
  }
};

export const callUpdatePetDataApi = async ({
  isAuth,
  body,
  url,
  method = "PUT",
}) => {
  try {
    console.log("isAuth[][][][][]", isAuth);
    console.log("body[][][][][]", body);
    console.log("url[][][][][]", url);
    console.log("method[][][][][]", method);
    const response = await fetch(url, {
      method,
      headers: isAuth ? getAuthHeaders() : getHeaders(),
      body: body,
    });

    const result = await response.json();

    showLog(
      url,
      result.status,
      method,
      isAuth ? getAuthHeaders() : getHeaders(),
      body,
      result
    );
    if (result.code == 401 && 404) return authError();

    // Handle 500 Internal Server Error
    if (result.code === 500) {
      showErrorMessage("Internal Server Error. Please try again later.");
      return { status: false, message: "Internal Server Error" };
    }

    // Handle 422 Validation Errors
    if (result.code === 422 && result.errors) {
      const firstErrorMessage = extractFirstValidationError(result.errors);
      showErrorMessage(firstErrorMessage);
      return { status: false, message: firstErrorMessage };
    }

    return result;
  } catch (e) {
    console.log("e[][][][][", e);
    if (e.message == "Aborted") return abortError();
  }
};

export const postMultiPartRequest = async ({
  header = getImageHeader(),
  body,
  url,
}) => {
  try {
    const response = await fetch(url, {
      method: "post",
      headers: header,
      body,
    });

    const result = await response.json();

    showLog(url, response.status, header, "POST", body, result);
    if (result.code == 401 && 404) return authError();

    // Handle 500 Internal Server Error
    if (result.code === 500) {
      showErrorMessage(result.message || "Internal Server Error. Please try again later.");
      return { status: false, message: "Internal Server Error" };
    }

    // Handle 422 Validation Errors
    if (result.code === 422 && result.errors) {
      const firstErrorMessage = extractFirstValidationError(result.errors);
      showErrorMessage(firstErrorMessage);
      return { status: false, message: firstErrorMessage };
    }
    return result;
  } catch (e) {
    console.log(
      "jfhjkdsfhkjsadfhjkdsafhkjldsafhkjladsfhkjlasdfhlkajsdhfkjl",
      e
    );

    if (e.message == "Aborted") return false;
  }
};

export const callAPI = async ({
  url,
  method = "POST",
  headers = {},
  body = null,
}) => {
  try {
    console.log("API Request Details:", { url, method, headers, body });

    // Initialize headers
    const apiHeaders = new Headers(headers);

    // Prepare request options
    const requestOptions = {
      method,
      headers: apiHeaders,
      body: body instanceof FormData ? body : JSON.stringify(body),
      redirect: "follow",
    };

    // Make the API call
    const response = await fetch(url, requestOptions);

    // Handle response
    const result = await response.json();
    console.log("API Response:", result);

    if (response.status === 401) {
      // Handle authentication errors
      authError();
      console.error("Unauthorized request");
      return { error: "Unauthorized" };
    }

    return result;
  } catch (error) {
    console.error("Error in API call:", error);
    return { error: error.message };
  }
};

const abortError = () => {
  const error =
    "Unable to connect with server! Request is taking longer than 30 seconds to fulfill";
  return { status: false, message: error };
};

const extractFirstValidationError = (errors) => {
  if (!errors || typeof errors !== "object")
    return "Validation error occurred.";

  const firstKey = Object.keys(errors)[0]; // Get first error key
  if (errors[firstKey] && Array.isArray(errors[firstKey])) {
    return errors[firstKey][0]; // Return first message of that error key
  }

  return "Validation error occurred.";
};

