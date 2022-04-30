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


import * as runtime from '../runtime';
import {
    AgencySerializerDetailed,
    AgencySerializerDetailedFromJSON,
    AgencySerializerDetailedToJSON,
    PaginatedAgencyList,
    PaginatedAgencyListFromJSON,
    PaginatedAgencyListToJSON,
} from '../models';

export interface AgenciesListRequest {
    agencyType?: number;
    countryCode?: string;
    featured?: boolean;
    limit?: number;
    offset?: number;
    ordering?: string;
    search?: string;
}

export interface AgenciesRetrieveRequest {
    id: number;
}

/**
 * 
 */
export class AgenciesApi extends runtime.BaseAPI {

    /**
     * API endpoint that allows Agencies to be viewed.  GET: Return a list of all the existing users.  MODE: Normal and Detailed /2.2.0/agencies/?mode=detailed  FILTERS: Parameters - \'featured\', \'agency_type\', \'country_code\' Example - /2.2.0/agencies/?featured=true  SEARCH EXAMPLE: /2.2.0/agencies/?search=nasa  ORDERING: Fields - \'id\', \'name\', \'featured\' Example - /2.2.0/agencies/?ordering=featured
     */
    async agenciesListRaw(requestParameters: AgenciesListRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PaginatedAgencyList>> {
        const queryParameters: any = {};

        if (requestParameters.agencyType !== undefined) {
            queryParameters['agency_type'] = requestParameters.agencyType;
        }

        if (requestParameters.countryCode !== undefined) {
            queryParameters['country_code'] = requestParameters.countryCode;
        }

        if (requestParameters.featured !== undefined) {
            queryParameters['featured'] = requestParameters.featured;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.ordering !== undefined) {
            queryParameters['ordering'] = requestParameters.ordering;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/2.2.0/agencies/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedAgencyListFromJSON(jsonValue));
    }

    /**
     * API endpoint that allows Agencies to be viewed.  GET: Return a list of all the existing users.  MODE: Normal and Detailed /2.2.0/agencies/?mode=detailed  FILTERS: Parameters - \'featured\', \'agency_type\', \'country_code\' Example - /2.2.0/agencies/?featured=true  SEARCH EXAMPLE: /2.2.0/agencies/?search=nasa  ORDERING: Fields - \'id\', \'name\', \'featured\' Example - /2.2.0/agencies/?ordering=featured
     */
    async agenciesList(requestParameters: AgenciesListRequest = {}, initOverrides?: RequestInit): Promise<PaginatedAgencyList> {
        const response = await this.agenciesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API endpoint that allows Agencies to be viewed.  GET: Return a list of all the existing users.  MODE: Normal and Detailed /2.2.0/agencies/?mode=detailed  FILTERS: Parameters - \'featured\', \'agency_type\', \'country_code\' Example - /2.2.0/agencies/?featured=true  SEARCH EXAMPLE: /2.2.0/agencies/?search=nasa  ORDERING: Fields - \'id\', \'name\', \'featured\' Example - /2.2.0/agencies/?ordering=featured
     */
    async agenciesRetrieveRaw(requestParameters: AgenciesRetrieveRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AgencySerializerDetailed>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling agenciesRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/2.2.0/agencies/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AgencySerializerDetailedFromJSON(jsonValue));
    }

    /**
     * API endpoint that allows Agencies to be viewed.  GET: Return a list of all the existing users.  MODE: Normal and Detailed /2.2.0/agencies/?mode=detailed  FILTERS: Parameters - \'featured\', \'agency_type\', \'country_code\' Example - /2.2.0/agencies/?featured=true  SEARCH EXAMPLE: /2.2.0/agencies/?search=nasa  ORDERING: Fields - \'id\', \'name\', \'featured\' Example - /2.2.0/agencies/?ordering=featured
     */
    async agenciesRetrieve(requestParameters: AgenciesRetrieveRequest, initOverrides?: RequestInit): Promise<AgencySerializerDetailed> {
        const response = await this.agenciesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
