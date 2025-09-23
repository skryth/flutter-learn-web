import ApiError from "./ApiError";
import type { IServerError } from "./types";

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: HeadersInit;
}

export default class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { method = "GET", body, headers } = options;

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...(body && { body: JSON.stringify(body) }),
    });

    const isJson = response.headers.get("Content-Type")?.includes("application/json");

    let responseData = null;
    if (isJson) {
      responseData = await response.json().catch(() => null);
    }

    if (!response.ok) {
      if (responseData && "error" in responseData) {
        const { error, code, details } = responseData as IServerError;
        throw new ApiError(error, Number(code), details);
      }
      throw new ApiError(`Response error: ${response.status}`, response.status);
    }

    return responseData as T;
  }

  get<T>(endpoint: string) {
    return this.request<T>(endpoint);
  }

  post<T>(endpoint: string, body?: unknown) {
    return this.request<T>(endpoint, { method: "POST", body });
  }
}

export const API = new ApiClient(import.meta.env.VITE_HOST)