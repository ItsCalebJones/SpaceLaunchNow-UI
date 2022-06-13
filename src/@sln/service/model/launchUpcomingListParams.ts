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

export type LaunchUpcomingListParams = { limit?: number; mission__orbit__name?: string; mission__orbit__name__icontains?: string; name?: string; offset?: number; ordering?: string; program?: number[]; r_spacex_api_id?: string; rocket__configuration__full_name?: string; rocket__configuration__full_name__icontains?: string; rocket__configuration__id?: number; rocket__configuration__manufacturer__name?: string; rocket__configuration__manufacturer__name__icontains?: string; rocket__configuration__name?: string; rocket__spacecraftflight__spacecraft__id?: number; rocket__spacecraftflight__spacecraft__name?: string; rocket__spacecraftflight__spacecraft__name__icontains?: string; search?: string; slug?: string; status?: number };
