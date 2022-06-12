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

export interface LauncherDetailed {
  readonly id: number;
  readonly url: string;
  details?: string;
  flight_proven?: boolean;
  serial_number?: string | null;
  status?: string;
  image_url?: string | null;
  readonly successful_landings: number;
  readonly attempted_landings: number;
  readonly flights: number;
  readonly last_launch_date: string;
  readonly first_launch_date: string;
}
