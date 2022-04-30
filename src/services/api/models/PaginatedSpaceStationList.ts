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
    SpaceStation,
    SpaceStationFromJSON,
    SpaceStationFromJSONTyped,
    SpaceStationToJSON,
} from './SpaceStation';

/**
 * 
 * @export
 * @interface PaginatedSpaceStationList
 */
export interface PaginatedSpaceStationList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedSpaceStationList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSpaceStationList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSpaceStationList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<SpaceStation>}
     * @memberof PaginatedSpaceStationList
     */
    results?: Array<SpaceStation>;
}

export function PaginatedSpaceStationListFromJSON(json: any): PaginatedSpaceStationList {
    return PaginatedSpaceStationListFromJSONTyped(json, false);
}

export function PaginatedSpaceStationListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedSpaceStationList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(SpaceStationFromJSON)),
    };
}

export function PaginatedSpaceStationListToJSON(value?: PaginatedSpaceStationList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(SpaceStationToJSON)),
    };
}

