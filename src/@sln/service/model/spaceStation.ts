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
import type { SpaceStationStatus } from './spaceStationStatus';
import type { SpaceStationType } from './spaceStationType';
import type { AgencyList } from './agencyList';
import type { ExpeditionSerializerForSpacestation } from './expeditionSerializerForSpacestation';

export interface SpaceStation {
  readonly id: number;
  readonly url: string;
  name: string;
  readonly status: SpaceStationStatus;
  readonly type: SpaceStationType;
  founded: string;
  deorbited?: string | null;
  description: string;
  readonly orbit: string;
  readonly owners: AgencyList[];
  readonly active_expedition: ExpeditionSerializerForSpacestation[];
  image_url?: string | null;
}
