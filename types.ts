export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    description?: string;
    featured_image?: CosmicImage;
    screenshots?: CosmicImage[];
    tech_stack?: string;
    live_url?: string;
    source_url?: string;
    featured?: boolean;
  };
}

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    category?: string;
    proficiency?: number;
    icon?: CosmicImage;
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    company?: string;
    role?: string;
    start_date?: string;
    end_date?: string;
    currently_working?: boolean;
    description?: string;
    company_logo?: CosmicImage;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}