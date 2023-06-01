export interface IAsteroid {
  asteroid: {
    name: string;
    absolute_magnitude_h: number;
    is_potentially_hazardous_asteroid: boolean;
    is_sentry_object: boolean;
    estimated_diameter: {
      kilometers: {
        estimated_diameter_max: number;
        estimated_diameter_min: number;
      };
    };
    close_approach_data: [
      {
        close_approach_date: string;
        miss_distance: {
          kilometers: number;
        };
        orbiting_body: string;
        relative_velocity: {
          kilometers_per_hour: number;
        };
      }
    ];
  };
}
