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
    SpacecraftConfig,
    SpacecraftConfigFromJSON,
    SpacecraftConfigFromJSONTyped,
    SpacecraftConfigToJSON,
} from './SpacecraftConfig';
import {
    SpacecraftStatus,
    SpacecraftStatusFromJSON,
    SpacecraftStatusFromJSONTyped,
    SpacecraftStatusToJSON,
} from './SpacecraftStatus';

/**
 * 
 * @export
 * @interface Spacecraft
 */
export interface Spacecraft {
    /**
     * 
     * @type {number}
     * @memberof Spacecraft
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof Spacecraft
     */
    readonly url: string;
    /**
     * 
     * @type {string}
     * @memberof Spacecraft
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Spacecraft
     */
    serialNumber?: string | null;
    /**
     * 
     * @type {SpacecraftStatus}
     * @memberof Spacecraft
     */
    readonly status: SpacecraftStatus | null;
    /**
     * 
     * @type {string}
     * @memberof Spacecraft
     */
    description: string;
    /**
     * 
     * @type {SpacecraftConfig}
     * @memberof Spacecraft
     */
    readonly spacecraftConfig: SpacecraftConfig | null;
}

export function SpacecraftFromJSON(json: any): Spacecraft {
    return SpacecraftFromJSONTyped(json, false);
}

export function SpacecraftFromJSONTyped(json: any, ignoreDiscriminator: boolean): Spacecraft {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'url': json['url'],
        'name': json['name'],
        'serialNumber': !exists(json, 'serial_number') ? undefined : json['serial_number'],
        'status': SpacecraftStatusFromJSON(json['status']),
        'description': json['description'],
        'spacecraftConfig': SpacecraftConfigFromJSON(json['spacecraft_config']),
    };
}

export function SpacecraftToJSON(value?: Spacecraft | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'serial_number': value.serialNumber,
        'description': value.description,
    };
}

