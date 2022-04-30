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
 * @interface LauncherConfigList
 */
export interface LauncherConfigList {
    /**
     * 
     * @type {number}
     * @memberof LauncherConfigList
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfigList
     */
    readonly url: string;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfigList
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfigList
     */
    family?: string;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfigList
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfigList
     */
    variant?: string;
}

export function LauncherConfigListFromJSON(json: any): LauncherConfigList {
    return LauncherConfigListFromJSONTyped(json, false);
}

export function LauncherConfigListFromJSONTyped(json: any, ignoreDiscriminator: boolean): LauncherConfigList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'url': json['url'],
        'name': json['name'],
        'family': !exists(json, 'family') ? undefined : json['family'],
        'fullName': !exists(json, 'full_name') ? undefined : json['full_name'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
    };
}

export function LauncherConfigListToJSON(value?: LauncherConfigList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'family': value.family,
        'full_name': value.fullName,
        'variant': value.variant,
    };
}

