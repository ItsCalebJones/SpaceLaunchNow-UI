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
    Agency,
    AgencyFromJSON,
    AgencyFromJSONTyped,
    AgencyToJSON,
} from './Agency';
import {
    Program,
    ProgramFromJSON,
    ProgramFromJSONTyped,
    ProgramToJSON,
} from './Program';

/**
 * 
 * @export
 * @interface LauncherConfig
 */
export interface LauncherConfig {
    /**
     * 
     * @type {number}
     * @memberof LauncherConfig
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfig
     */
    readonly url: string;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfig
     */
    name: string;
    /**
     * 
     * @type {Agency}
     * @memberof LauncherConfig
     */
    readonly manufacturer: Agency | null;
    /**
     * 
     * @type {Array<Program>}
     * @memberof LauncherConfig
     */
    readonly program: Array<Program>;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfig
     */
    family?: string;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfig
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfig
     */
    variant?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LauncherConfig
     */
    reusable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfig
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfig
     */
    infoUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LauncherConfig
     */
    wikiUrl?: string | null;
}

export function LauncherConfigFromJSON(json: any): LauncherConfig {
    return LauncherConfigFromJSONTyped(json, false);
}

export function LauncherConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): LauncherConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'url': json['url'],
        'name': json['name'],
        'manufacturer': AgencyFromJSON(json['manufacturer']),
        'program': ((json['program'] as Array<any>).map(ProgramFromJSON)),
        'family': !exists(json, 'family') ? undefined : json['family'],
        'fullName': !exists(json, 'full_name') ? undefined : json['full_name'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'reusable': !exists(json, 'reusable') ? undefined : json['reusable'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'infoUrl': !exists(json, 'info_url') ? undefined : json['info_url'],
        'wikiUrl': !exists(json, 'wiki_url') ? undefined : json['wiki_url'],
    };
}

export function LauncherConfigToJSON(value?: LauncherConfig | null): any {
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
        'reusable': value.reusable,
        'image_url': value.imageUrl,
        'info_url': value.infoUrl,
        'wiki_url': value.wikiUrl,
    };
}

