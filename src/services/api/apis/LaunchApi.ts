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
    LaunchDetailed,
    LaunchDetailedFromJSON,
    LaunchDetailedToJSON,
    PaginatedLaunchSerializerCommonList,
    PaginatedLaunchSerializerCommonListFromJSON,
    PaginatedLaunchSerializerCommonListToJSON,
} from '../models';

export interface LaunchListRequest {
    lastUpdatedGte?: Date;
    lastUpdatedLte?: Date;
    limit?: number;
    missionOrbitName?: string;
    missionOrbitNameIcontains?: string;
    name?: string;
    netGt?: Date;
    netGte?: Date;
    netLt?: Date;
    netLte?: Date;
    offset?: number;
    ordering?: string;
    rSpacexApiId?: string;
    rocketConfigurationFullName?: string;
    rocketConfigurationFullNameIcontains?: string;
    rocketConfigurationId?: number;
    rocketConfigurationManufacturerName?: string;
    rocketConfigurationManufacturerNameIcontains?: string;
    rocketConfigurationName?: string;
    rocketSpacecraftflightSpacecraftId?: number;
    rocketSpacecraftflightSpacecraftName?: string;
    rocketSpacecraftflightSpacecraftNameIcontains?: string;
    search?: string;
    slug?: string;
    status?: number;
    windowEndGt?: Date;
    windowEndGte?: Date;
    windowEndLt?: Date;
    windowEndLte?: Date;
    windowStartGt?: Date;
    windowStartGte?: Date;
    windowStartLt?: Date;
    windowStartLte?: Date;
}

export interface LaunchPreviousListRequest {
    limit?: number;
    missionOrbitName?: string;
    missionOrbitNameIcontains?: string;
    name?: string;
    offset?: number;
    ordering?: string;
    program?: Array<number>;
    rSpacexApiId?: string;
    rocketConfigurationFullName?: string;
    rocketConfigurationFullNameIcontains?: string;
    rocketConfigurationId?: number;
    rocketConfigurationManufacturerName?: string;
    rocketConfigurationManufacturerNameIcontains?: string;
    rocketConfigurationName?: string;
    rocketSpacecraftflightSpacecraftId?: number;
    rocketSpacecraftflightSpacecraftName?: string;
    rocketSpacecraftflightSpacecraftNameIcontains?: string;
    search?: string;
    slug?: string;
    status?: number;
}

export interface LaunchPreviousRetrieveRequest {
    id: string;
}

export interface LaunchRetrieveRequest {
    id: string;
}

export interface LaunchUpcomingListRequest {
    limit?: number;
    missionOrbitName?: string;
    missionOrbitNameIcontains?: string;
    name?: string;
    offset?: number;
    ordering?: string;
    program?: Array<number>;
    rSpacexApiId?: string;
    rocketConfigurationFullName?: string;
    rocketConfigurationFullNameIcontains?: string;
    rocketConfigurationId?: number;
    rocketConfigurationManufacturerName?: string;
    rocketConfigurationManufacturerNameIcontains?: string;
    rocketConfigurationName?: string;
    rocketSpacecraftflightSpacecraftId?: number;
    rocketSpacecraftflightSpacecraftName?: string;
    rocketSpacecraftflightSpacecraftNameIcontains?: string;
    search?: string;
    slug?: string;
    status?: number;
}

export interface LaunchUpcomingRetrieveRequest {
    id: string;
}

/**
 * 
 */
export class LaunchApi extends runtime.BaseAPI {

    /**
     * API endpoint that returns all Launch objects or a single launch.  EXAMPLE - /launch/\\<id\\>/ or /launch/?mode=list&search=SpaceX  GET Return a list of all Launch objects.  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\'  EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency, mission name & spacecraft name.  EXAMPLE - ?search=SpaceX
     */
    async launchListRaw(requestParameters: LaunchListRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PaginatedLaunchSerializerCommonList>> {
        const queryParameters: any = {};

        if (requestParameters.lastUpdatedGte !== undefined) {
            queryParameters['last_updated__gte'] = (requestParameters.lastUpdatedGte as any).toISOString();
        }

        if (requestParameters.lastUpdatedLte !== undefined) {
            queryParameters['last_updated__lte'] = (requestParameters.lastUpdatedLte as any).toISOString();
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.missionOrbitName !== undefined) {
            queryParameters['mission__orbit__name'] = requestParameters.missionOrbitName;
        }

        if (requestParameters.missionOrbitNameIcontains !== undefined) {
            queryParameters['mission__orbit__name__icontains'] = requestParameters.missionOrbitNameIcontains;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.netGt !== undefined) {
            queryParameters['net__gt'] = (requestParameters.netGt as any).toISOString();
        }

        if (requestParameters.netGte !== undefined) {
            queryParameters['net__gte'] = (requestParameters.netGte as any).toISOString();
        }

        if (requestParameters.netLt !== undefined) {
            queryParameters['net__lt'] = (requestParameters.netLt as any).toISOString();
        }

        if (requestParameters.netLte !== undefined) {
            queryParameters['net__lte'] = (requestParameters.netLte as any).toISOString();
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.ordering !== undefined) {
            queryParameters['ordering'] = requestParameters.ordering;
        }

        if (requestParameters.rSpacexApiId !== undefined) {
            queryParameters['r_spacex_api_id'] = requestParameters.rSpacexApiId;
        }

        if (requestParameters.rocketConfigurationFullName !== undefined) {
            queryParameters['rocket__configuration__full_name'] = requestParameters.rocketConfigurationFullName;
        }

        if (requestParameters.rocketConfigurationFullNameIcontains !== undefined) {
            queryParameters['rocket__configuration__full_name__icontains'] = requestParameters.rocketConfigurationFullNameIcontains;
        }

        if (requestParameters.rocketConfigurationId !== undefined) {
            queryParameters['rocket__configuration__id'] = requestParameters.rocketConfigurationId;
        }

        if (requestParameters.rocketConfigurationManufacturerName !== undefined) {
            queryParameters['rocket__configuration__manufacturer__name'] = requestParameters.rocketConfigurationManufacturerName;
        }

        if (requestParameters.rocketConfigurationManufacturerNameIcontains !== undefined) {
            queryParameters['rocket__configuration__manufacturer__name__icontains'] = requestParameters.rocketConfigurationManufacturerNameIcontains;
        }

        if (requestParameters.rocketConfigurationName !== undefined) {
            queryParameters['rocket__configuration__name'] = requestParameters.rocketConfigurationName;
        }

        if (requestParameters.rocketSpacecraftflightSpacecraftId !== undefined) {
            queryParameters['rocket__spacecraftflight__spacecraft__id'] = requestParameters.rocketSpacecraftflightSpacecraftId;
        }

        if (requestParameters.rocketSpacecraftflightSpacecraftName !== undefined) {
            queryParameters['rocket__spacecraftflight__spacecraft__name'] = requestParameters.rocketSpacecraftflightSpacecraftName;
        }

        if (requestParameters.rocketSpacecraftflightSpacecraftNameIcontains !== undefined) {
            queryParameters['rocket__spacecraftflight__spacecraft__name__icontains'] = requestParameters.rocketSpacecraftflightSpacecraftNameIcontains;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.slug !== undefined) {
            queryParameters['slug'] = requestParameters.slug;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.windowEndGt !== undefined) {
            queryParameters['window_end__gt'] = (requestParameters.windowEndGt as any).toISOString();
        }

        if (requestParameters.windowEndGte !== undefined) {
            queryParameters['window_end__gte'] = (requestParameters.windowEndGte as any).toISOString();
        }

        if (requestParameters.windowEndLt !== undefined) {
            queryParameters['window_end__lt'] = (requestParameters.windowEndLt as any).toISOString();
        }

        if (requestParameters.windowEndLte !== undefined) {
            queryParameters['window_end__lte'] = (requestParameters.windowEndLte as any).toISOString();
        }

        if (requestParameters.windowStartGt !== undefined) {
            queryParameters['window_start__gt'] = (requestParameters.windowStartGt as any).toISOString();
        }

        if (requestParameters.windowStartGte !== undefined) {
            queryParameters['window_start__gte'] = (requestParameters.windowStartGte as any).toISOString();
        }

        if (requestParameters.windowStartLt !== undefined) {
            queryParameters['window_start__lt'] = (requestParameters.windowStartLt as any).toISOString();
        }

        if (requestParameters.windowStartLte !== undefined) {
            queryParameters['window_start__lte'] = (requestParameters.windowStartLte as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/2.2.0/launch/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedLaunchSerializerCommonListFromJSON(jsonValue));
    }

    /**
     * API endpoint that returns all Launch objects or a single launch.  EXAMPLE - /launch/\\<id\\>/ or /launch/?mode=list&search=SpaceX  GET Return a list of all Launch objects.  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\'  EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency, mission name & spacecraft name.  EXAMPLE - ?search=SpaceX
     */
    async launchList(requestParameters: LaunchListRequest = {}, initOverrides?: RequestInit): Promise<PaginatedLaunchSerializerCommonList> {
        const response = await this.launchListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API endpoint that returns previous Launch objects.  GET Return a list of previous Launches  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\' EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency and mission name. EXAMPLE - ?search=SpaceX
     */
    async launchPreviousListRaw(requestParameters: LaunchPreviousListRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PaginatedLaunchSerializerCommonList>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.missionOrbitName !== undefined) {
            queryParameters['mission__orbit__name'] = requestParameters.missionOrbitName;
        }

        if (requestParameters.missionOrbitNameIcontains !== undefined) {
            queryParameters['mission__orbit__name__icontains'] = requestParameters.missionOrbitNameIcontains;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.ordering !== undefined) {
            queryParameters['ordering'] = requestParameters.ordering;
        }

        if (requestParameters.program) {
            queryParameters['program'] = requestParameters.program;
        }

        if (requestParameters.rSpacexApiId !== undefined) {
            queryParameters['r_spacex_api_id'] = requestParameters.rSpacexApiId;
        }

        if (requestParameters.rocketConfigurationFullName !== undefined) {
            queryParameters['rocket__configuration__full_name'] = requestParameters.rocketConfigurationFullName;
        }

        if (requestParameters.rocketConfigurationFullNameIcontains !== undefined) {
            queryParameters['rocket__configuration__full_name__icontains'] = requestParameters.rocketConfigurationFullNameIcontains;
        }

        if (requestParameters.rocketConfigurationId !== undefined) {
            queryParameters['rocket__configuration__id'] = requestParameters.rocketConfigurationId;
        }

        if (requestParameters.rocketConfigurationManufacturerName !== undefined) {
            queryParameters['rocket__configuration__manufacturer__name'] = requestParameters.rocketConfigurationManufacturerName;
        }

        if (requestParameters.rocketConfigurationManufacturerNameIcontains !== undefined) {
            queryParameters['rocket__configuration__manufacturer__name__icontains'] = requestParameters.rocketConfigurationManufacturerNameIcontains;
        }

        if (requestParameters.rocketConfigurationName !== undefined) {
            queryParameters['rocket__configuration__name'] = requestParameters.rocketConfigurationName;
        }

        if (requestParameters.rocketSpacecraftflightSpacecraftId !== undefined) {
            queryParameters['rocket__spacecraftflight__spacecraft__id'] = requestParameters.rocketSpacecraftflightSpacecraftId;
        }

        if (requestParameters.rocketSpacecraftflightSpacecraftName !== undefined) {
            queryParameters['rocket__spacecraftflight__spacecraft__name'] = requestParameters.rocketSpacecraftflightSpacecraftName;
        }

        if (requestParameters.rocketSpacecraftflightSpacecraftNameIcontains !== undefined) {
            queryParameters['rocket__spacecraftflight__spacecraft__name__icontains'] = requestParameters.rocketSpacecraftflightSpacecraftNameIcontains;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.slug !== undefined) {
            queryParameters['slug'] = requestParameters.slug;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/2.2.0/launch/previous/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedLaunchSerializerCommonListFromJSON(jsonValue));
    }

    /**
     * API endpoint that returns previous Launch objects.  GET Return a list of previous Launches  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\' EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency and mission name. EXAMPLE - ?search=SpaceX
     */
    async launchPreviousList(requestParameters: LaunchPreviousListRequest = {}, initOverrides?: RequestInit): Promise<PaginatedLaunchSerializerCommonList> {
        const response = await this.launchPreviousListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API endpoint that returns previous Launch objects.  GET Return a list of previous Launches  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\' EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency and mission name. EXAMPLE - ?search=SpaceX
     */
    async launchPreviousRetrieveRaw(requestParameters: LaunchPreviousRetrieveRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LaunchDetailed>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling launchPreviousRetrieve.');
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
            path: `/2.2.0/launch/previous/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LaunchDetailedFromJSON(jsonValue));
    }

    /**
     * API endpoint that returns previous Launch objects.  GET Return a list of previous Launches  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\' EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency and mission name. EXAMPLE - ?search=SpaceX
     */
    async launchPreviousRetrieve(requestParameters: LaunchPreviousRetrieveRequest, initOverrides?: RequestInit): Promise<LaunchDetailed> {
        const response = await this.launchPreviousRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API endpoint that returns all Launch objects or a single launch.  EXAMPLE - /launch/\\<id\\>/ or /launch/?mode=list&search=SpaceX  GET Return a list of all Launch objects.  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\'  EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency, mission name & spacecraft name.  EXAMPLE - ?search=SpaceX
     */
    async launchRetrieveRaw(requestParameters: LaunchRetrieveRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LaunchDetailed>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling launchRetrieve.');
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
            path: `/2.2.0/launch/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LaunchDetailedFromJSON(jsonValue));
    }

    /**
     * API endpoint that returns all Launch objects or a single launch.  EXAMPLE - /launch/\\<id\\>/ or /launch/?mode=list&search=SpaceX  GET Return a list of all Launch objects.  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\'  EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency, mission name & spacecraft name.  EXAMPLE - ?search=SpaceX
     */
    async launchRetrieve(requestParameters: LaunchRetrieveRequest, initOverrides?: RequestInit): Promise<LaunchDetailed> {
        const response = await this.launchRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API endpoint that returns future Launch objects and launches from the last twenty four hours.  GET Return a list of future Launches  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\'  EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency and mission name. EXAMPLE - ?search=SpaceX
     */
    async launchUpcomingListRaw(requestParameters: LaunchUpcomingListRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PaginatedLaunchSerializerCommonList>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.missionOrbitName !== undefined) {
            queryParameters['mission__orbit__name'] = requestParameters.missionOrbitName;
        }

        if (requestParameters.missionOrbitNameIcontains !== undefined) {
            queryParameters['mission__orbit__name__icontains'] = requestParameters.missionOrbitNameIcontains;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.ordering !== undefined) {
            queryParameters['ordering'] = requestParameters.ordering;
        }

        if (requestParameters.program) {
            queryParameters['program'] = requestParameters.program;
        }

        if (requestParameters.rSpacexApiId !== undefined) {
            queryParameters['r_spacex_api_id'] = requestParameters.rSpacexApiId;
        }

        if (requestParameters.rocketConfigurationFullName !== undefined) {
            queryParameters['rocket__configuration__full_name'] = requestParameters.rocketConfigurationFullName;
        }

        if (requestParameters.rocketConfigurationFullNameIcontains !== undefined) {
            queryParameters['rocket__configuration__full_name__icontains'] = requestParameters.rocketConfigurationFullNameIcontains;
        }

        if (requestParameters.rocketConfigurationId !== undefined) {
            queryParameters['rocket__configuration__id'] = requestParameters.rocketConfigurationId;
        }

        if (requestParameters.rocketConfigurationManufacturerName !== undefined) {
            queryParameters['rocket__configuration__manufacturer__name'] = requestParameters.rocketConfigurationManufacturerName;
        }

        if (requestParameters.rocketConfigurationManufacturerNameIcontains !== undefined) {
            queryParameters['rocket__configuration__manufacturer__name__icontains'] = requestParameters.rocketConfigurationManufacturerNameIcontains;
        }

        if (requestParameters.rocketConfigurationName !== undefined) {
            queryParameters['rocket__configuration__name'] = requestParameters.rocketConfigurationName;
        }

        if (requestParameters.rocketSpacecraftflightSpacecraftId !== undefined) {
            queryParameters['rocket__spacecraftflight__spacecraft__id'] = requestParameters.rocketSpacecraftflightSpacecraftId;
        }

        if (requestParameters.rocketSpacecraftflightSpacecraftName !== undefined) {
            queryParameters['rocket__spacecraftflight__spacecraft__name'] = requestParameters.rocketSpacecraftflightSpacecraftName;
        }

        if (requestParameters.rocketSpacecraftflightSpacecraftNameIcontains !== undefined) {
            queryParameters['rocket__spacecraftflight__spacecraft__name__icontains'] = requestParameters.rocketSpacecraftflightSpacecraftNameIcontains;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.slug !== undefined) {
            queryParameters['slug'] = requestParameters.slug;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/2.2.0/launch/upcoming/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedLaunchSerializerCommonListFromJSON(jsonValue));
    }

    /**
     * API endpoint that returns future Launch objects and launches from the last twenty four hours.  GET Return a list of future Launches  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\'  EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency and mission name. EXAMPLE - ?search=SpaceX
     */
    async launchUpcomingList(requestParameters: LaunchUpcomingListRequest = {}, initOverrides?: RequestInit): Promise<PaginatedLaunchSerializerCommonList> {
        const response = await this.launchUpcomingListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API endpoint that returns future Launch objects and launches from the last twenty four hours.  GET Return a list of future Launches  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\'  EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency and mission name. EXAMPLE - ?search=SpaceX
     */
    async launchUpcomingRetrieveRaw(requestParameters: LaunchUpcomingRetrieveRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LaunchDetailed>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling launchUpcomingRetrieve.');
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
            path: `/2.2.0/launch/upcoming/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LaunchDetailedFromJSON(jsonValue));
    }

    /**
     * API endpoint that returns future Launch objects and launches from the last twenty four hours.  GET Return a list of future Launches  FILTERS Fields - \'name\', \'id(s)\', \'lsp__id\', \'lsp__name\', \'serial_number\', \'launcher_config__id\',  \'rocket__spacecraftflight__spacecraft__name\', \'is_crewed\', \'include_suborbital\', \'spacecraft_config__ids\',  \'related\', \'location__ids\', \'lsp__ids\'  MODE \'normal\', \'list\', \'detailed\'  EXAMPLE ?mode=list  SEARCH Searches through the launch name, rocket name, launch agency and mission name. EXAMPLE - ?search=SpaceX
     */
    async launchUpcomingRetrieve(requestParameters: LaunchUpcomingRetrieveRequest, initOverrides?: RequestInit): Promise<LaunchDetailed> {
        const response = await this.launchUpcomingRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
