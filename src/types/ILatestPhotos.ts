export interface ILatestPhotosObject {
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  earth_date: string;
  id: number;
  img_src: string;
  rover: {
    id: number;
    landing_date: string;
    launch_date: string;
    name: string;
    status: string;
  };
}

export interface ILatestPhotosArray {
  latest_photos: [ILatestPhotosObject];
}
