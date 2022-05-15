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
    LandingLocation,
    LandingLocationFromJSON,
    LandingLocationFromJSONTyped,
    LandingLocationToJSON,
} from './LandingLocation';
import {
    LandingType,
    LandingTypeFromJSON,
    LandingTypeFromJSONTyped,
    LandingTypeToJSON,
} from './LandingType';

/**
 * 
 * @export
 * @interface Landing
 */
export interface Landing {
    /**
     * 
     * @type {number}
     * @memberof Landing
     */
    readonly id: number;
    /**
     * 
     * @type {boolean}
     * @memberof Landing
     */
    attempt?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Landing
     */
    success?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof Landing
     */
    description?: string;
    /**
     * 
     * @type {LandingLocation}
     * @memberof Landing
     */
    readonly location: LandingLocation | null;
    /**
     * 
     * @type {LandingType}
     * @memberof Landing
     */
    readonly type: LandingType | null;
}

export function LandingFromJSON(json: any): Landing {
    return LandingFromJSONTyped(json, false);
}

export function LandingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Landing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'attempt': !exists(json, 'attempt') ? undefined : json['attempt'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'location': LandingLocationFromJSON(json['location']),
        'type': LandingTypeFromJSON(json['type']),
    };
}

export function LandingToJSON(value?: Landing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attempt': value.attempt,
        'success': value.success,
        'description': value.description,
    };
}
