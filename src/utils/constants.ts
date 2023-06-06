export enum URLS {
  DASHBOARD = 'dashboard',
  INSTANCE = 'instance',
  WORLD = 'world',
  GALLERY = 'gallery',
  MESSAGE = 'message',
  USER = 'user',
  SESSIONS = 'session',
}

export enum SORTING_TYPE {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}

export enum GLOBAL_CONST {
  LS_CALLBACK_PAGE = 'callbackPage',
}

export const TABLE_PAGINATION = 40;

export enum USER_ROLE {
  USER = 0,
  EVENT_ADMIN = 1,
  GLOBAL_ADMIN = 2,
}

export enum VARIANT_ANNOUNCEMENT {
  ANNOUNCEMENT = 'Announcement',
  WARNING = 'Warning',
}

export const ANNOUNCEMENT_OPTIONS = [
  { id: VARIANT_ANNOUNCEMENT.ANNOUNCEMENT, name: VARIANT_ANNOUNCEMENT.ANNOUNCEMENT },
  { id: VARIANT_ANNOUNCEMENT.WARNING, name: VARIANT_ANNOUNCEMENT.WARNING },
];

export enum ADDRESSABLE_TYPES {
  NONE = 'None',
  WORLD = 'World',
  MEDIA_GALLERY = 'MediaGallery',
  PORTAL = 'Portal',
  PLINTH = 'Plinth',
  ACTIVITY = 'Activity',
  MUSIC = 'Music',
}

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
export const MAX_FILE_SIZE_IMAGE_UPLOAD = 1 * 1024 * 1024;
