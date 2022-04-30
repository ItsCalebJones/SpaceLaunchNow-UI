/* tslint:disable */
/* eslint-disable */
/**
 * Launch Library
 * The Launch Library API is a product by The Space Devs with an up-to-date database of Spaceflight events.   While this API is free to use it is subject to rate limiting for non-authenticated requests.  Please use https://lldev.thespacedevs.com for development testing - the development endpoint has stale data but is not subject to any rate limits.  If you are interested in a higher rate limit please consider supporting the project on Patreon for access to an API Key.
 *
 * The version of the OpenAPI document: v2.2.0
 * Contact: support@thespacedevs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Location,
    LocationFromJSON,
    LocationFromJSONTyped,
    LocationToJSON,
} from './Location';

/**
 * 
 * @export
 * @interface LandingLocation
 */
export interface LandingLocation {
    /**
     * 
     * @type {number}
     * @memberof LandingLocation
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof LandingLocation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof LandingLocation
     */
    abbrev?: string;
    /**
     * 
     * @type {string}
     * @memberof LandingLocation
     */
    description?: string | null;
    /**
     * 
     * @type {Location}
     * @memberof LandingLocation
     */
    location: Location;
    /**
     * 
     * @type {string}
     * @memberof LandingLocation
     */
    readonly successfulLandings: string;
}

export function LandingLocationFromJSON(json: any): LandingLocation {
    return LandingLocationFromJSONTyped(json, false);
}

export function LandingLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): LandingLocation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'abbrev': !exists(json, 'abbrev') ? undefined : json['abbrev'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'location': LocationFromJSON(json['location']),
        'successfulLandings': json['successful_landings'],
    };
}

export function LandingLocationToJSON(value?: LandingLocation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'abbrev': value.abbrev,
        'description': value.description,
        'location': LocationToJSON(value.location),
    };
}

