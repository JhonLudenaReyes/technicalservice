export interface ErrorResponse {
  headers: Headers;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: Error;
}

export interface Headers {
  normalizedNames: NormalizedNames;
  lazyUpdate: any;
}

export interface NormalizedNames {}

export interface Error {
  timestamp: string;
  status: number;
  error: string;
  trace: string;
  message: string;
  path: string;
}
