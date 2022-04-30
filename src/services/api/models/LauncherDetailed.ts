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
 * @interface LauncherDetailed
 */
export interface LauncherDetailed {
    /**
     * 
     * @type {number}
     * @memberof LauncherDetailed
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof LauncherDetailed
     */
    readonly url: string;
    /**
     * 
     * @type {string}
     * @memberof LauncherDetailed
     */
    details?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LauncherDetailed
     */
    flightProven?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LauncherDetailed
     */
    serialNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LauncherDetailed
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof LauncherDetailed
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LauncherDetailed
     */
    readonly successfulLandings: number;
    /**
     * 
     * @type {number}
     * @memberof LauncherDetailed
     */
    readonly attemptedLandings: number;
    /**
     * 
     * @type {number}
     * @memberof LauncherDetailed
     */
    readonly flights: number;
    /**
     * 
     * @type {Date}
     * @memberof LauncherDetailed
     */
    readonly lastLaunchDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof LauncherDetailed
     */
    readonly firstLaunchDate: Date;
}

export function LauncherDetailedFromJSON(json: any): LauncherDetailed {
    return LauncherDetailedFromJSONTyped(json, false);
}

export function LauncherDetailedFromJSONTyped(json: any, ignoreDiscriminator: boolean): LauncherDetailed {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'url': json['url'],
        'details': !exists(json, 'details') ? undefined : json['details'],
        'flightProven': !exists(json, 'flight_proven') ? undefined : json['flight_proven'],
        'serialNumber': !exists(json, 'serial_number') ? undefined : json['serial_number'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'successfulLandings': json['successful_landings'],
        'attemptedLandings': json['attempted_landings'],
        'flights': json['flights'],
        'lastLaunchDate': (new Date(json['last_launch_date'])),
        'firstLaunchDate': (new Date(json['first_launch_date'])),
    };
}

export function LauncherDetailedToJSON(value?: LauncherDetailed | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'details': value.details,
        'flight_proven': value.flightProven,
        'serial_number': value.serialNumber,
        'status': value.status,
        'image_url': value.imageUrl,
    };
}
