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
/**
 * 
 * @export
 * @interface AgencyList
 */
export interface AgencyList {
    /**
     * 
     * @type {number}
     * @memberof AgencyList
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof AgencyList
     */
    readonly url: string;
    /**
     * 
     * @type {string}
     * @memberof AgencyList
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AgencyList
     */
    abbrev?: string;
}

export function AgencyListFromJSON(json: any): AgencyList {
    return AgencyListFromJSONTyped(json, false);
}

export function AgencyListFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgencyList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'url': json['url'],
        'name': json['name'],
        'abbrev': !exists(json, 'abbrev') ? undefined : json['abbrev'],
    };
}

export function AgencyListToJSON(value?: AgencyList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'abbrev': value.abbrev,
    };
}

