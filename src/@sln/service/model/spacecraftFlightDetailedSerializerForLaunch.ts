/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * Launch Library
 * The Launch Library API is a product by The Space Devs with an up-to-date database of Spaceflight events. 

While this API is free to use it is subject to rate limiting for non-authenticated requests.

Please use https://lldev.thespacedevs.com for development testing - the development endpoint has stale data but is not subject to any rate limits.

If you are interested in a higher rate limit please consider supporting the project on Patreon for access to an API Key.
 * OpenAPI spec version: v2.2.0
 */
import type { AstronautFlight } from './astronautFlight';
import type { SpacecraftDetailedNoFlights } from './spacecraftDetailedNoFlights';
import type { DockingEventSerializerForSpacecraftFlight } from './dockingEventSerializerForSpacecraftFlight';

export interface SpacecraftFlightDetailedSerializerForLaunch {
  id: number;
  readonly url: string;
  mission_end?: string | null;
  destination?: string | null;
  readonly launch_crew: AstronautFlight[];
  readonly onboard_crew: AstronautFlight[];
  readonly landing_crew: AstronautFlight[];
  readonly spacecraft: SpacecraftDetailedNoFlights;
  readonly docking_events: DockingEventSerializerForSpacecraftFlight[];
}
