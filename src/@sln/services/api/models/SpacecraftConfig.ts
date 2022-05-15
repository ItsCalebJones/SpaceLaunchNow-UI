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
    AgencySerializerMini,
    AgencySerializerMiniFromJSON,
    AgencySerializerMiniFromJSONTyped,
    AgencySerializerMiniToJSON,
} from './AgencySerializerMini';
import {
    SpacecraftConfigType,
    SpacecraftConfigTypeFromJSON,
    SpacecraftConfigTypeFromJSONTyped,
    SpacecraftConfigTypeToJSON,
} from './SpacecraftConfigType';

/**
 * 
 * @export
 * @interface SpacecraftConfig
 */
export interface SpacecraftConfig {
    /**
     * 
     * @type {number}
     * @memberof SpacecraftConfig
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof SpacecraftConfig
     */
    readonly url: string;
    /**
     * 
     * @type {string}
     * @memberof SpacecraftConfig
     */
    name: string;
    /**
     * 
     * @type {SpacecraftConfigType}
     * @memberof SpacecraftConfig
     */
    readonly type: SpacecraftConfigType | null;
    /**
     * 
     * @type {AgencySerializerMini}
     * @memberof SpacecraftConfig
     */
    readonly agency: AgencySerializerMini | null;
    /**
     * 
     * @type {boolean}
     * @memberof SpacecraftConfig
     */
    inUse?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SpacecraftConfig
     */
    imageUrl?: string | null;
}

export function SpacecraftConfigFromJSON(json: any): SpacecraftConfig {
    return SpacecraftConfigFromJSONTyped(json, false);
}

export function SpacecraftConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpacecraftConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'url': json['url'],
        'name': json['name'],
        'type': SpacecraftConfigTypeFromJSON(json['type']),
        'agency': AgencySerializerMiniFromJSON(json['agency']),
        'inUse': !exists(json, 'in_use') ? undefined : json['in_use'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
    };
}

export function SpacecraftConfigToJSON(value?: SpacecraftConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'in_use': value.inUse,
        'image_url': value.imageUrl,
    };
}
