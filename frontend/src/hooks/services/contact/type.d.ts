export interface ContactBodyRequest {
  name: string;
  email: string;
  phone: string;
}

export interface ContactBodyResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ContactCreateRequest {
  body: ContactBodyRequest;
}

export interface ContactUpdateRequest {
  id: string;
  body: ContactBodyRequest;
}

export interface ContactDeleteRequest {
  id: string;
}

export interface ContactGetRequest {
  params: {
    page: number;
    size: number;
  };
}
