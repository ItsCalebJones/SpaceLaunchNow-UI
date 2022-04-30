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
 * @interface Update
 */
export interface Update {
    /**
     * 
     * @type {number}
     * @memberof Update
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Update
     */
    readonly profileImage: string;
    /**
     * 
     * @type {string}
     * @memberof Update
     */
    comment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Update
     */
    infoUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Update
     */
    readonly createdBy: string;
    /**
     * 
     * @type {Date}
     * @memberof Update
     */
    readonly createdOn: Date;
}

export function UpdateFromJSON(json: any): Update {
    return UpdateFromJSONTyped(json, false);
}

export function UpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Update {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'profileImage': json['profile_image'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'infoUrl': !exists(json, 'info_url') ? undefined : json['info_url'],
        'createdBy': json['created_by'],
        'createdOn': (new Date(json['created_on'])),
    };
}

export function UpdateToJSON(value?: Update | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'comment': value.comment,
        'info_url': value.infoUrl,
    };
}
