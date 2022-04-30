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
    LauncherConfigList,
    LauncherConfigListFromJSON,
    LauncherConfigListFromJSONTyped,
    LauncherConfigListToJSON,
} from './LauncherConfigList';

/**
 * 
 * @export
 * @interface RocketSerializerCommon
 */
export interface RocketSerializerCommon {
    /**
     * 
     * @type {number}
     * @memberof RocketSerializerCommon
     */
    readonly id: number;
    /**
     * 
     * @type {LauncherConfigList}
     * @memberof RocketSerializerCommon
     */
    readonly _configuration: LauncherConfigList | null;
}

export function RocketSerializerCommonFromJSON(json: any): RocketSerializerCommon {
    return RocketSerializerCommonFromJSONTyped(json, false);
}

export function RocketSerializerCommonFromJSONTyped(json: any, ignoreDiscriminator: boolean): RocketSerializerCommon {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        '_configuration': LauncherConfigListFromJSON(json['configuration']),
    };
}

export function RocketSerializerCommonToJSON(value?: RocketSerializerCommon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

