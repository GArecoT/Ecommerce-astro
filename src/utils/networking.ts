export const baseURL = "http://localhost:8080";

export const postJSON = async (body: object, endpoint: string) => {
  const response = await fetch(baseURL + endpoint, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(body),
  });
  return response;
};

export const apiGet = async (endpoint: string) => {
  const response = await fetch(baseURL + endpoint, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response;
};
