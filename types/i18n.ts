/* eslint-disable @typescript-eslint/no-explicit-any */
import homeJson from "@/messages/pt/home.json";
import componentsJson from "@/messages/pt/components.json";
export type HomeMessages = typeof homeJson.home;
export type ComponentsMessages = typeof componentsJson.home;

type NestedKeys<T> = {
  [K in keyof T]: T[K] extends Record<string, any>
    ? `${K}.${NestedKeys<T[K]> & string}`
    : K;
}[keyof T];

export type HomeMessageKeys = NestedKeys<HomeMessages>;
export type ComponentsMessageKeys = NestedKeys<ComponentsMessages>;
