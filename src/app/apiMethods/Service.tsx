import { API_ENDPOINTS } from "./ApiMethos";
import { callPostAPI } from "./ServiceMethods";




export const getResponse = (jsonResponse: any) => {

  if (jsonResponse) {

    if (Array.isArray(jsonResponse)) {

      const response = jsonResponse[0];
      return response;
    } else if (typeof jsonResponse == "object") {

      return jsonResponse
    } else {
      console.log('jsonResponse[][][[][]]', jsonResponse);
    }
  } else {
    console.log("jsonResponse Else Case[][][][][]", jsonResponse?.json());
  }
};

export const homeApi = async (isAuth: Boolean = false, body: any) => {
  const response = await callPostAPI({
    isAuth,
    body: JSON.stringify(body),
    url: API_ENDPOINTS.Home,
  });







  
  console.log("Commonfunction>>>>loginresponse", body?.password);
  const result = await getResponse(response);
  if (result?.status && Object.keys(result.data).length > 0) {
    console.log("Commonfunction>>>>loginresponse", result);
    return result;
  } else {
    throw result;
  }
};




// export const breedListApi = async (categoryId) => {
//   const response = await CallGetAPI({
//     url: `${API_END_POINTS.breedList}=${categoryId}`,
//   });
//   const result = await getResponse(response);

//   if (result?.status && result.data) {
//     return result;
//   }
//   else {
//     throw result;
//   }
// };







