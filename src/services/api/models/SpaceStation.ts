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
    AgencyList,
    AgencyListFromJSON,
    AgencyListFromJSONTyped,
    AgencyListToJSON,
} from './AgencyList';
import {
    ExpeditionSerializerForSpacestation,
    ExpeditionSerializerForSpacestationFromJSON,
    ExpeditionSerializerForSpacestationFromJSONTyped,
    ExpeditionSerializerForSpacestationToJSON,
} from './ExpeditionSerializerForSpacestation';
import {
    SpaceStationStatus,
    SpaceStationStatusFromJSON,
    SpaceStationStatusFromJSONTyped,
    SpaceStationStatusToJSON,
} from './SpaceStationStatus';
import {
    SpaceStationType,
    SpaceStationTypeFromJSON,
    SpaceStationTypeFromJSONTyped,
    SpaceStationTypeToJSON,
} from './SpaceStationType';

/**
 * 
 * @export
 * @interface SpaceStation
 */
export interface SpaceStation {
    /**
     * 
     * @type {number}
     * @memberof SpaceStation
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof SpaceStation
     */
    readonly url: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceStation
     */
    name: string;
    /**
     * 
     * @type {SpaceStationStatus}
     * @memberof SpaceStation
     */
    readonly status: SpaceStationStatus | null;
    /**
     * 
     * @type {SpaceStationType}
     * @memberof SpaceStation
     */
    readonly type: SpaceStationType | null;
    /**
     * 
     * @type {Date}
     * @memberof SpaceStation
     */
    founded: Date;
    /**
     * 
     * @type {Date}
     * @memberof SpaceStation
     */
    deorbited?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof SpaceStation
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceStation
     */
    readonly orbit: string;
    /**
     * 
     * @type {Array<AgencyList>}
     * @memberof SpaceStation
     */
    readonly owners: Array<AgencyList>;
    /**
     * 
     * @type {Array<ExpeditionSerializerForSpacestation>}
     * @memberof SpaceStation
     */
    readonly activeExpedition: Array<ExpeditionSerializerForSpacestation>;
    /**
     * 
     * @type {string}
     * @memberof SpaceStation
     */
    imageUrl?: string | null;
}

export function SpaceStationFromJSON(json: any): SpaceStation {
    return SpaceStationFromJSONTyped(json, false);
}

export function SpaceStationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpaceStation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'url': json['url'],
        'name': json['name'],
        'status': SpaceStationStatusFromJSON(json['status']),
        'type': SpaceStationTypeFromJSON(json['type']),
        'founded': (new Date(json['founded'])),
        'deorbited': !exists(json, 'deorbited') ? undefined : (json['deorbited'] === null ? null : new Date(json['deorbited'])),
        'description': json['description'],
        'orbit': json['orbit'],
        'owners': ((json['owners'] as Array<any>).map(AgencyListFromJSON)),
        'activeExpedition': ((json['active_expedition'] as Array<any>).map(ExpeditionSerializerForSpacestationFromJSON)),
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
    };
}

export function SpaceStationToJSON(value?: SpaceStation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'founded': (value.founded.toISOString().substr(0,10)),
        'deorbited': value.deorbited === undefined ? undefined : (value.deorbited === null ? null : value.deorbited.toISOString().substr(0,10)),
        'description': value.description,
        'image_url': value.imageUrl,
    };
}

