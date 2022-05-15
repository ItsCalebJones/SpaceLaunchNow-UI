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
    SpaceStationStatus,
    SpaceStationStatusFromJSON,
    SpaceStationStatusFromJSONTyped,
    SpaceStationStatusToJSON,
} from './SpaceStationStatus';

/**
 * 
 * @export
 * @interface PaginatedSpaceStationStatusList
 */
export interface PaginatedSpaceStationStatusList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedSpaceStationStatusList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSpaceStationStatusList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSpaceStationStatusList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<SpaceStationStatus>}
     * @memberof PaginatedSpaceStationStatusList
     */
    results?: Array<SpaceStationStatus>;
}

export function PaginatedSpaceStationStatusListFromJSON(json: any): PaginatedSpaceStationStatusList {
    return PaginatedSpaceStationStatusListFromJSONTyped(json, false);
}

export function PaginatedSpaceStationStatusListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedSpaceStationStatusList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(SpaceStationStatusFromJSON)),
    };
}

export function PaginatedSpaceStationStatusListToJSON(value?: PaginatedSpaceStationStatusList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(SpaceStationStatusToJSON)),
    };
}
