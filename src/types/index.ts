export interface IPostType {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export interface ApiResponse {
  data: IPostType[],
  status: number,
};

export interface ApiError {
  message: string,
  status: number,
}

export interface IPlanetEventType {
  id: string,
  title: string,
  description: string,
  link: string,
  categories: [
    {
      id: number,
      title: string,
    }
  ],
  sources: [
    {
      id: string,
      url: string
    }
  ],
  geometries: [
    {
      date: string,
      type: string, 
      coordinates: number[]
    }
  ]
};

export interface NASAApiResponse {
  title: string,
	description: string,
	link: string,
	events: IPlanetEventType[]
};
