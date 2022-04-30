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
    Update,
    UpdateFromJSON,
    UpdateFromJSONTyped,
    UpdateToJSON,
} from './Update';

/**
 * 
 * @export
 * @interface PaginatedUpdateList
 */
export interface PaginatedUpdateList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedUpdateList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedUpdateList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedUpdateList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Update>}
     * @memberof PaginatedUpdateList
     */
    results?: Array<Update>;
}

export function PaginatedUpdateListFromJSON(json: any): PaginatedUpdateList {
    return PaginatedUpdateListFromJSONTyped(json, false);
}

export function PaginatedUpdateListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedUpdateList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(UpdateFromJSON)),
    };
}

export function PaginatedUpdateListToJSON(value?: PaginatedUpdateList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(UpdateToJSON)),
    };
}
