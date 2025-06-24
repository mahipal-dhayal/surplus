const getHeaders = (): Record<string, string> => {
  const headers: Record<string, string> = {
    "Device-Type": 'web',
    "Accept": "application/json",
    "Version-Code": "1",
    "Content-Type": "application/json", // Ensures raw JSON is sent
  };

  console.log("headers>>>>>>>>>", headers);
  return headers;
};

const getAuthHeaders = (): Record<string, string> => {
  const headers: Record<string, string> = {
    "Device-Type": 'web',
    "Accept": "application/json",
    "Version-Code": "1",
    "Content-Type": "application/json", // Ensures raw JSON is sent
  };

  // const token = localStorage.getItem("token");
  // if (token) {
  //   headers["Authorization"] = "Bearer " + token;
  // }

  console.log("headers>>>>>>>>>", headers);

  return headers;
};

const getImageHeader = (): Record<string, string> => {
  const headers: Record<string, string> = {
    "Device-Type": 'web',
    "Accept": "application/json",
    "Version-Code": "1",
    "Content-Type": "multipart/form-data", // Ensures raw JSON is sent
  };

  const token = localStorage.getItem("token");
  if (token) {
    headers["Authorization"] = "Bearer " + token;
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

  localStorage.removeItem("USER_DETAILS");
  alert("Session Expired: your session has been expired please login again");
  return {
    status: false,
    message: "Your session has been expired please login again",
  };
};

export const CallGetAPI = async ({ header = getAuthHeaders(), url }: { header?: any; url: string }) => {
  try {
    const response = await fetch(url, { headers: header });
    const result = await response.json();
    showLog(url, response.status, header, "GET", {}, result);
    if (result.code == 401 || result.code == 404 || result.code == 500) return authError();
    if (result.code === 500) {
      alert("Internal Server Error. Please try again later.");
      return { status: false, message: "Internal Server Error" };
    }
    if (result.code === 422 && result.errors) {
      const firstErrorMessage = extractFirstValidationError(result.errors);
      alert(firstErrorMessage);
      return { status: false, message: firstErrorMessage };
    }
    return result;
  } catch (e: unknown) {
    if ((e as Error).message === "Aborted") return abortError();
  }
};

export const callPostAPI = async ({ isAuth, body, url, method = "POST" }: { isAuth: boolean; body: any; url: string; method?: string }) => {
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
    if (result.code == 401 || result.code == 404) return authError();

    // Handle 500 Internal Server Error
    if (result.code === 500) {
      alert("Internal Server Error. Please try again later.");
      return { status: false, message: "Internal Server Error" };
    }

    // 🔐 Handle 403 - Stripe onboarding required
    if (result.code === 403 && result.message) {
      alert(result.message); // <-- Show the specific error
      return { status: false, message: result.message };
    }

    // Handle 422 Validation Errors
    if (result.code === 422 && result.errors) {
      const firstErrorMessage = extractFirstValidationError(result.errors);
      alert(firstErrorMessage);
      return { status: false, message: firstErrorMessage };
    }

    return result;
  } catch (e: unknown) {
    console.log("e[][][][][", e);
    if ((e as Error).message === "Aborted") return abortError();
  }
};

export const postMultiPartRequest = async ({ header = getImageHeader(), body, url }: { header?: any; body: any; url: string }) => {
  try {
    const response = await fetch(url, {
      method: "post",
      headers: header,
      body,
    });

    const result = await response.json();

    showLog(url, response.status, header, "POST", body, result);
    if (result.code == 401 || result.code == 404) return authError();

    // Handle 500 Internal Server Error
    if (result.code === 500) {
      alert(result.message || "Internal Server Error. Please try again later.");
      return { status: false, message: "Internal Server Error" };
    }

    // Handle 422 Validation Errors
    if (result.code === 422 && result.errors) {
      const firstErrorMessage = extractFirstValidationError(result.errors);
      alert(firstErrorMessage);
      return { status: false, message: firstErrorMessage };
    }
    return result;
  } catch (e: unknown) {
    console.log(
      "jfhjkdsfhkjsadfhjkdsafhkjldsafhkjladsfhkjlasdfhlkajsdhfkjl",
      e
    );

    if ((e as Error).message === "Aborted") return false;
  }
};

const abortError = () => {
  const error =
    "Unable to connect with server! Request is taking longer than 30 seconds to fulfill";
  return { status: false, message: error };
};

const extractFirstValidationError = (errors: any) => {
  if (!errors || typeof errors !== "object")
    return "Validation error occurred.";
  const firstKey = Object.keys(errors)[0]; // Get first error key
  if (errors[firstKey] && Array.isArray(errors[firstKey])) {
    return errors[firstKey][0]; // Return first message of that error key
  }
  return "Validation error occurred.";
};

