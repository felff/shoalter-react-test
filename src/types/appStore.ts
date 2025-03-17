export type App = {
  'im:name': { label: string };
  'im:image': { label: string }[];
  summary: { label: string };
  title: { label: string };
  category: { attributes: { label: string } };
};

export type AppList = App[];
