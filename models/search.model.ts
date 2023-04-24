export interface SearchData {
  next_page_token?: string;
  results: Result[];
}

export interface Result {
  name: string;
  link?: string;
  image?: string;
  formatted_address: string;
}

export interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}
