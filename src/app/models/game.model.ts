export interface IGame {
  title: string;
  description: string;
  releaseDate: Date;
  image?: string;
  rating: number;
  downloads: number;
  comingSoon: boolean;
}
