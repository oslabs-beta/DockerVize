export interface ObjectElement {
  id: string;
  name: string;
  state: string;
}

export type ContainerResponse = ObjectElement[];

export interface Metric {
  __name__: string;
  id: string;
  instance: string;
  job: string;
}

export type Value = [String, String];
export interface MemoryElement {
  metric: Metric;
  values: [][];
  id: String;
}

export type MemoryDataResponse = MemoryElement[];

export interface OneState {
  name: string;
  statusState: string;
  dataState: boolean;
}
export interface AllStates {
  [id: string]: OneState;
}

export interface useSelectorState {
  containerAPI: any;
  statusToggle: AllStates;
}

export type PostResponse = string;
